const { randomBytes } = require('crypto');
exports.handler = async function(event, context) {
  const fail = Math.random() > 0.5;
  const version = randomBytes(10).toString('hex');
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { "Content-Type": fail ? "text/x-not-valid-sw-script" : "text/javascript", "X-Version": version },
    body: `
      const VERSION = JSON.parse('${JSON.stringify(version)}');
      console.log('hi from **NEW** service worker code. VERSION:', VERSION);
    `,
  }
}
