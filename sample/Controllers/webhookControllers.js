var Tokens = require('csrf');
var crypto = require('crypto');
var csrf = new Tokens();
var VendorController = require('../Controllers/vendorController')


exports.webhook = async (req, res, next) => {
    try {

        var webhookPayload = JSON.stringify(req.body);
        console.log('The paylopad is :' + JSON.stringify(req.body));
        var signature = req.get('intuit-signature');

        // if signature is empty return 401
        if (!signature) {
            return res.status(401).send('FORBIDDEN');
        }

        // if payload is empty, don't do anything
        if (!webhookPayload) {
            return res.status(200).send('success');
        }

        /**
         * Validates the payload with the intuit-signature hash
         */
        var hash = crypto.createHmac('sha256', process.env.webhooksVerifier).update(webhookPayload).digest('base64');
        if (signature === hash) {
            console.log("The Webhook notification payload is :" + webhookPayload);
            for (var i = 0; i < req.body.eventNotifications.length; i++) {
                var entities = req.body.eventNotifications[i].dataChangeEvent.entities;
                var realmID = req.body.eventNotifications[i].realmId;
                for (var j = 0; j < entities.length; j++) {
                    if (entities[i].name) {
                        var forLowerCaseEntity = entities[i].name;
                        var lowerCaseEntity = forLowerCaseEntity.toLowerCase();
                        req.iid = entities[i].id;
                        // const url = 'https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281111480/' + lowerCaseEntity + '/' + entities[i].id;
                        // var response = await axios.get(url, {
                        //     params: {
                        //         minorversion: 65,
                        //     },
                        //     headers: {
                        //         'Authorization': `Bearer ${bearerToken}`,
                        //         'Accept': 'application/json',
                        //     }
                        // })
                        // console.log("Axios Response", response.data);

                        VendorController.getVendorById(lowerCaseEntity, req, res);
                    }
                }
            }
        }

    } catch (error) {
        return next(error);
    }
}

