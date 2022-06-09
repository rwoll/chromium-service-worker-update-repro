const { randomBytes } = require('crypto');
exports.handler = async function(event, context) {
  const version = event.queryStringParameters.mode === 'same' ? 'static-version' : randomBytes(10).toString('hex');
  return {
    isBase64Encoded: false,
    statusCode: 200,
    headers: { "Content-Type": "text/javascript", "X-Version": version },
    body: `
      const VERSION = JSON.parse('${JSON.stringify(version)}');
      console.log('hi from **NEW** service worker code. VERSION:', VERSION);
    `,
  }
}
