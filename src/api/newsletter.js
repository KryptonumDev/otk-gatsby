export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://osrodektk.pl');

  if (req.method === 'POST') {
    const data = {
      id: req.body.id || '',
      email: req.body.email || '',
    };

    const validEmailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!validEmailRegex.test(data.email.toLowerCase()) || !data.id) {
      res.status(422).json({ success: false });
    } else {
      const headers = {
        'Content-Type': 'application/json',
        'X-MailerLite-ApiKey': process.env.MAILERLITE_APIKEY,
      };

      fetch(`https://api.mailerlite.com/api/v2/groups/${data.id}/subscribers/`, {
        method: 'POST',
        headers,
        body: JSON.stringify(data),
      })
      .then((response) => {
        if(response.ok){
          res.status(200).json({ success: true });
        } else {
          res.status(422).json({ success: false });
        }
      })
      .catch(() => {
        res.status(422).json({ success: false });
      });
    }
  } else {
    res.status(404).send('');
  }
}