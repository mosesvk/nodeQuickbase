const QuickBase = require('quickbase');
require('dotenv').config();

const quickbase = new QuickBase({
  realm: process.env.REALM,
  userToken: process.env.USER_TOKEN
});

(async () => {
  try {
    const results = await quickbase.api('API_DoQuery', {
      dbid: 'bt3egnexu', // Your actual DBID
      clist: '533.7.539',
      options: 'num-5' // Limit to the first 5 records
    });

    console.log('API response:', results);

    if (results && results.table && results.table.records) {
      console.log('Records:', results.table.records);
    } else {
      console.error('Unexpected response structure:', results);
    }
  } catch (err) {
    console.error('Error:', err);

    if (err.response) {
      console.error('Response error:', err.response.data);
    } else if (err.request) {
      console.error('Request error:', err.request);
    } else {
      console.error('General error:', err.message);
    }
  }
})();