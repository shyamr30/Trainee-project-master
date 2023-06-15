const AWS = require("aws-sdk");
const client = new AWS.SecretsManager({
    region: process.env.region
});

// Use this code snippet in your app.
// If you need more information about configurations or implementing the sample code, visit the AWS docs:
// https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/getting-started.html
client.getSecretValue({ SecretId: process.env.secret_name }, (err, response) => {
    const secret = JSON.parse(response.SecretString);
    for (const envkey of Object.keys(secret)) {
        process.env[envkey] = secret[envkey];
    }
});