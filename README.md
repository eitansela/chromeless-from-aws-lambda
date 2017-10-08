# chromeless-from-aws-lambda
This project is coming to demonstrate how to call chromeless from AWS Lambda function 

## Prerequisites
Deploy Chromeless Proxy service using serverless

## Proxy Usage
Modify the endpointUrl and apiKey in handler.js
```js
const chromeless = new Chromeless({
  remote: {
    endpointUrl: 'https://XXXXXXXXXX.execute-api.eu-west-1.amazonaws.com/dev'
    apiKey: 'your-api-key-here'
  },
})
```

## Installation
``` bash
# install dependencies
$ npm install

# test the function locally
$ serverless invoke local -f invokeRemoteChromeless

# deploy the Lambda function to AWS
$ serverless deploy
```
