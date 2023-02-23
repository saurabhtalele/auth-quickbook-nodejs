const msal = require('@azure/msal-node');

const msalConfig = {
    auth: {
        clientId: process.env.CLIENT_ID,
        authority: process.env.AAD_ENDPOINT + '/' + process.env.TENANT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        redirectUri: 'msal96631681-aa24-46aa-a0ae-dcc46cd52365: '//auth
    }
};

const tokenRequest = {
    scopes: ["https://api.businesscentral.dynamics.com/.default"],
};

// const apiConfig = {
//     uri: process.env.GRAPH_ENDPOINT + '/v1.0/users',
// };

const cca = new msal.ConfidentialClientApplication(msalConfig);

async function getToken(tokenRequest) {
    return await cca.acquireTokenByClientCredential(tokenRequest);
}


module.exports = {
    apiConfig: apiConfig,
    tokenRequest: tokenRequest,
    getToken: getToken
};