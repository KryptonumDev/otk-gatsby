import { emailRegex, phoneRegex } from '../constants/regex';
import { removeHtmlTags } from '../utils/functions';

const RESEND_API_KEY = process.env.RESEND_API_KEY;

function constructMessage(data) {
  const { name, surname, tel, email, subject, message, legal } = data;
  return `
<p>Imię: <b>${name}</b></p>
${surname ? `<p>Nazwisko: <b>${surname}</b></p>` : ''}
${tel ? `<p>Numer telefonu: <b>${tel}</b></p>` : ''}
<p>Adres e-mail: <b>${email}</b></p>
<p>Temat: <b>${subject}</b></p>
<p>${message}</p>

<br /><br />
<p>${legal ? 'Zaakceptowano politykę prywatności' : ''}</p>`;
}

export default async function handler(req, res) {
  const origin = req.headers.origin;
  const allowedOrigins = ['https://osrodektk.pl', 'http://localhost:8000'];
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  if (req.method !== 'POST') return res.status(404).send('');
  const {
    name = '',
    tel = '',
    email = '',
    subject = '',
    message = '',
    legal = '',
    targetEmail = '',
  } = req.body;

  if (
    !name ||
    !emailRegex.test(email.toLowerCase()) ||
    (tel && !phoneRegex.test(tel)) ||
    !subject ||
    message.trim().length === 0 ||
    !legal ||
    !targetEmail
  ) {
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
        from: `Ośrodek Zdrowia w Turośni Kościelnej <biuro@send.osrodektk.pl>`,
        to: targetEmail,
        reply_to: email,
        subject: `Formularz współpracy - ${name} przesyła wiadomość`,
        html: messageBody,
        text: removeHtmlTags(messageBody),
      }),
    });
    const responseData = await response.json();
    if (response.status !== 200) {
      console.error('[cooperation] Resend error:', response.status, responseData);
      return res.status(400).json({ success: false, error: responseData });
    }
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('[cooperation] Exception:', error);
    return res.status(422).json({ success: false });
  }
}
