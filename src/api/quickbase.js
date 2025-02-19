const QuickBase = require('quickbase');

const quickbase = new QuickBase({
  realm: process.env.REALM,
  userToken: process.env.USER_TOKEN
});

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'GET') {
    try {
      const results = await quickbase.api('API_DoQuery', {
        dbid: 'your_dbid',
        query: "{3.EX.'your_query'}",
        clist: '3.6.7'
      });

      res.status(200).json(results);
    } catch (err) {
      console.error('Error:', err);

      if (err.response) {
        if (err.response.status === 404) {
          res.status(404).json({ error: 'Resource not found. Please check the endpoint URL and parameters.' });
        } else {
          res.status(err.response.status).json({ error: err.response.data });
        }
      } else if (err.request) {
        res.status(500).json({ error: 'No response received from QuickBase' });
      } else {
        res.status(500).json({ error: 'Failed to fetch data from QuickBase' });
      }
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}