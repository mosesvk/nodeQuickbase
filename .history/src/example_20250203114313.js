import QuickBase from 'quickbase';
require('dotenv').config();

const quickbase = new QuickBase({
  realm: process.env.REALM,
  userToken: process.env.USER_TOKEN
});

(async () => {
  try {
    const results = await quickbase.api('API_DoQuery', {
      dbid: 'bt3egnexu', // Your actual DBID
      query: "{3.EX.'your_query'}", // Replace with your actual query condition
      clist: '533.7.539',
      options: 'num-5' // Limit to the first 5 records
    });

    if (results && results.table && results.table.records) {
      console.log(results.table.records);
    } else {
      console.error('Unexpected response structure:', results);
    }
  } catch (err) {
    console.error('Error:', err);
  }
})();