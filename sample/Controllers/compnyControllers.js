const OAuthClient = require('intuit-oauth');

exports.getCompanyInfo = async (req, res, next) => {
    try {

        var oauthClient = req.oauthClient;

        const companyID = oauthClient.getToken().realmId;

        const url =
            oauthClient.environment == 'sandbox'
                ? OAuthClient.environment.sandbox
                : OAuthClient.environment.production;

        var authResponse = await oauthClient.
            makeApiCall({ url: `${url}v3/company/${companyID}/companyinfo/${companyID}` })

        console.log(`The response for API call is :${JSON.stringify(authResponse)}`);

        return res.send(JSON.parse(authResponse.text()));

    } catch (error) {
        return next(error);
    }
}
