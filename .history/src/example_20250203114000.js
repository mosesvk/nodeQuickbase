const QuickBase = require('quickbase');
const axios = require('axios');

const quickbase = new QuickBase({
  realm: process.env.REALM,
  userToken: process.env.USER_TOKEN
});

(async () => {
  try {
    const results = await quickbase.api('API_DoQuery', {
      dbid: 'your_dbid',
      query: "{3.EX.'2023'}",
      clist: '3.6.7',
      options: 'num-5' 
    });
    console.log(results);

    // Simulate fetching data in a Next.js component
    const response = await axios.get('http://localhost:3000/api/quickbase');
    console.log(response.data);
  } catch (err) {
    console.error('Error:', err);
  }
})();