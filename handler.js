'use strict';
const { Chromeless } = require('chromeless')
var moment = require("moment")

module.exports.invokeRemoteChromeless = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify({
      message: 'Finished taking screenshot with serverlesss chrome! Your function executed successfully!',
      input: event,
    }),
  };

  var now = moment();
  console.log(now.format("dddd, MMMM Do YYYY, h:mm:ss a"))

  run()

  async function run() {
      const chromeless = new Chromeless({
        remote: {
            endpointUrl: 'https://XXXXXXXXXX.execute-api.eu-west-1.amazonaws.com/dev'
            apiKey: 'your-api-key-here'
          },
      })

      const screenshot = await chromeless
        .goto('https://www.google.com')
        .type('chromeless', 'input[name="q"]')
        .press(13)
        .wait('#resultStats')
        .screenshot()

      console.log(screenshot) // prints local file path or S3 url

      await chromeless.end()
    }

  callback(null, response);
};
