import { emailRegex, phoneRegex } from '../constants/regex';
import { removeHtmlTags } from '../utils/functions';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

function constructMessage(data) {
  const { name, surname, tel, email, center, subject, message, legal } = data;
  return `
<p>Imię: <b>${name}</b></p>
${surname && `<p>Nazwisko: <b>${surname}</b></p>`}
${tel && `<p>Numer telefonu: <b>${tel}</b></p>`}
<p>Adres e-mail: <b>${email}</b></p>
<p>Ośrodek: <b>${center}</b></p>
<p>Temat: <b>${subject}</b></p>
<p>${message}</p>

<br /><br />
<p>${legal && 'Zaakceptowano politykę prywatności'}</p>`;
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://osrodektk.pl');
  if (req.method !== 'POST') return res.status(404).send('');
  const { name = '', tel = '', email = '', center = '', subject = '', message = '', legal = '' } = req.body;

  if (!name || !emailRegex.test(email.toLowerCase()) || (tel && !phoneRegex.test(tel)) || !center || !subject || message.trim().length === 0 || !legal) {
    return res.status(422).json({ success: false });
  }

  const messageBody = constructMessage(req.body);

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: `Ośrodek Zdrowia w Turośni Koscielnej <biuro@send.osrodektk.pl>`,
        to: 'rejestracja@osrodektk.pl',
        reply_to: email,
        subject: `Formularz kontaktowy - ${name} przesyła wiadomość`,
        html: messageBody,
        text: removeHtmlTags(messageBody),
      }),
    });
    if (response.status !== 200) {
      return res.status(400).json({ success: false });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(422).json({ success: false });
  }
}
