import QuickBase from 'quickbase';

const quickbase = new QuickBase({
  realm: process.env.REALM,
  userToken: process.env.USER_TOKEN
});

(async () => {
  try {
    const results = await quickbase.getApp({
      appId: 'bps9da9i5'
    });
    console.log(results.name);
  } catch (err) {
    console.error('Error:', err);
  }
})();