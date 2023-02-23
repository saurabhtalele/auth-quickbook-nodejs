const OAuthClient = require('intuit-oauth');
let oauth2_token_json = null;
let redirectUri = '';

/**
 * Instantiate new Client
 * @type {OAuthClient}
 */

let oauthClient = null;


exports.atHome = async (req, res, next) => {
    try {

        return res.render('index');;
    } catch (error) {
        return next(error);
    }
}


exports.authUri = async (req, res, next) => {
    try {

        oauthClient = new OAuthClient({
            clientId: req.query.json.clientId,
            clientSecret: req.query.json.clientSecret,
            environment: req.query.json.environment,
            redirectUri: req.query.json.redirectUri,
        })
        const authUri = oauthClient.authorizeUri({
            scope: [OAuthClient.scopes.Accounting],
            state: 'intuit-test',
        });
        return res.send(authUri);
    } catch (error) {
        return next(error);
    }
}


exports.callBack = async (req, res, next) => {
    try {

        var authResponse = await oauthClient
            .createToken(req.url)

        oauth2_token_json = JSON.stringify(authResponse.getJson(), null, 2);

        return res.send('');
    } catch (error) {
        return next(error);
    }
}
exports.refreshAccessToken = async (req, res, next) => {
    try {

        var authResponse = await oauthClient
            .refresh()

        console.log(`The Refresh Token is  ${JSON.stringify(authResponse.getJson())}`);
        oauth2_token_json = JSON.stringify(authResponse.getJson(), null, 2);

        return res.send(oauth2_token_json);
    } catch (error) {
        return next(error);
    }
}
exports.retrieveToken = async (req, res, next) => {
    try {


        return res.send(oauth2_token_json);


    } catch (error) {
        return next(error);
    }
}

exports.retrieveToken2 = () => {
    try {

        // var hh = Json.stringify(oauth2_token_json);

        //console.log("othclient", Json.stringify(oauthClient));
        var oauth = oauthClient;
        return oauth;

    } catch (error) {
        return next(error);
    }
}

exports.retrieveToken3 = (req, res, next) => {
    try {

        // var hh = Json.stringify(oauth2_token_json);

        //console.log("othclient", Json.stringify(oauthClient));
        req.oauthClient = oauthClient;
        next();
    } catch (error) {
        return next(error);
    }
}


exports.disconnecto = (req, res, next) => {
    try {

        console.log('The disconnect called ');
        const authUri = oauthClient.authorizeUri({
            scope: [OAuthClient.scopes.OpenId, OAuthClient.scopes.Email],
            state: 'intuit-test',
        });
        res.redirect(authUri);

    } catch (error) {
        return next(error);
    }
}