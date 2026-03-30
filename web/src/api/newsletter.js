import fetch from "node-fetch"

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed', success: false });
  }

  const { email, groupId } = req.body;

  if (!groupId) {
    return res.status(400).json({ message: 'Missing required fields', success: false });
  }

  try {
    const subscriber = {
      email,
      groups: groupId ? [groupId] : []
    };

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MAILERLITE_TOKEN_API}`,
      },
      body: JSON.stringify(subscriber),
    });
    if (!response.ok) {
      return res.status(response.status).json({
        message: 'Failed to subscribe',
        success: false
      });
    }
    return res.status(200).json({
      message: 'Successfully subscribed',
      success: true
    });
  } catch {
    return res.status(400).json({
      message: 'An error occurred while subscribing',
      success: false
    });
  }
}
