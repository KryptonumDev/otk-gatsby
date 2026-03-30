const projectId = process.env.SANITY_PROJECT_ID || 'gurb517x';
const dataset = process.env.SANITY_DATASET || 'production';
const apiVersion = '2024-06-01';
const query = '*[_type == "cooperation"][0]{hero_DisableShape}';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ success: false });
  }

  try {
    const response = await fetch(
      `https://${projectId}.apicdn.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}&perspective=published`
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('[cooperation-hero] Sanity query failed:', response.status, errorText);
      return res.status(502).json({ success: false });
    }

    const payload = await response.json();

    return res.status(200).json({
      success: true,
      hero_DisableShape: Boolean(payload?.result?.hero_DisableShape),
    });
  } catch (error) {
    console.error('[cooperation-hero] Request failed:', error);
    return res.status(500).json({ success: false });
  }
}
