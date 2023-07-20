import { emailRegex } from '../constants/regex';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://osrodektk.pl');

  if (req.method !== 'POST') {
    return res.status(404).send('');
  }

  const { id, email } = req.body;

  if (!email || !id || !emailRegex.test(email.toLowerCase())) {
    return res.status(422).json({ success: false });
  }

  const headers = {
    'Content-Type': 'application/json',
    'X-MailerLite-ApiKey': process.env.MAILERLITE_APIKEY,
  };

  fetch(`https://api.mailerlite.com/api/v2/groups/${id}/subscribers/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(req.body),
  })
  .then((response) => {
    if (response.ok) {
      res.status(200).json({ success: true });
    } else {
      res.status(422).json({ success: false });
    }
  })
  .catch(() => {
    res.status(422).json({ success: false });
  });
}
