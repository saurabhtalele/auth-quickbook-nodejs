var axios = require("axios");

const OAuthClient = require('intuit-oauth');

var authController = require('./authControllers')

exports.getfindWthById = async (lowerCaseEntity, req, res, next,) => {
    try {

        var oauthClient = authController.retrieveToken2()
        //  var oauthClient = req.oauthClient1;
        var id = req.iid;

        const token = oauthClient.getToken().access_token;;

        // const url =
        //     oauthClient.environment == 'sandbox'
        //         ? OAuthClient.environment.sandbox
        //         : OAuthClient.environment.production;


        // var authResponse = await oauthClient.
         //  makeApiCall({ url: `${url}v3/company/${companyID}/${lowerCaseEntity}/${id}` })

           // console.log("authResponse  Response", JSON.parse(authResponse.text()));

        const url = 'https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281111480/' + lowerCaseEntity + '/' + id;
        var response =await  axios.get(url, {
            params: {
                minorversion: 65,
            },
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
            }
        })
        console.log("Axios   Response", response.data);
          
                    if(await response.data.PurchaseOrder.Id ) 
                    {                    
                        var data = 

                            {
                                "orderDate": new Date(),
                                 "postingDate":new Date(),
                                 "vendorNumber" :  response.data.PurchaseOrder.VendorRef.value
                        
       
                         };

                         ///////find vendor if not found make one and make purchase order 
                         const findVendor = await axios.post("https://api.businesscentral.dynamics.com/v2.0/bd2ac605-0345-4baf-ad17-20a2ae35dcb5/demo/api/v2.0/companies(425185e4-048b-ed11-aad6-000d3a38e688)/purchaseOrders?tenant=bd2ac605-0345-4baf-ad17-20a2ae35dcb5", data, {
                            auth: {
                                username: "SAURABH.TALELE",
                                password: 
                            }
                        })

                        const purchaseorder = await axios.post("https://api.businesscentral.dynamics.com/v2.0/bd2ac605-0345-4baf-ad17-20a2ae35dcb5/demo/api/v2.0/companies(425185e4-048b-ed11-aad6-000d3a38e688)/purchaseOrders?tenant=bd2ac605-0345-4baf-ad17-20a2ae35dcb5", data, {
                            auth: {
                                username: "SAURABH.TALELE",
                                password: "H9x+reA4FSq7PvWYye/PXiHUq+OAGOObdKNrqTkK5bs="
                            }
                        })

                        console.log("authResponse  Response", purchaseorder.data);
                    };
                
                    console.log("authResponse  Response same", authResponse.text());


        //next();

    } catch (error) {
        return console.log(error);
    }
}



        // const url = 'https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281111480/customer/1?minorversion=65';
        // const bearerToken = "eyJlbmMiOiJBMTI4Q0JDLUhTMjU2IiwiYWxnIjoiZGlyIn0..ediInp64fvaiRupYsE5hKw.mO08jAXa8L5u8HK4kzTmF7LyrjwJ9xVu3wS0An5HV2ovZJd-PgVUQjWE40MW-rkrybpu83n9kMgi2lEa8LMMW2f4E4SVeN5W-Cj_LoLGbOMDry2CLd0RHQwntr1S-9Y2l_r0g_KjYKoPelcB20OOQAS3CzKGmWiN0FuNnWUrKP8uKTLSipsd9xWQnwYaJn0zMANFOTjp0p5Si6uF0NhJY_rHzIwFnlIlUAwE0Yk3UEqcZTMSCBa25esWLWiCnhEXkQlo-d4Va4XIznSkGeY6nOE7fG30lCoI6wlunUU8vBLPT0m4ijk_MDsBhk8sXFJrCHbvmlGp1cS-QUxroQ1Mk02cBR3ACGaaN9IMeVMQ_TE9Om0F80id0mBAkQBCARSRTSuq5u5EaKwRz6GKeCyC3vwY14V2DRvsqkaxFHWwkF3G2UnGp8uWU2t91-m9FwjnYKhhi1Vfwh38yR6hqq_zrn_-y6fOJtMZbG6QGrX4NeqRV-Rs3gHM0-9JC408URql4v8GRT1K-kFgvQhrfctmO8QnroeT-o-JergskeZ4msd7vwpFFU0JpHG01R20lJy4WOgBlWasZ6aSU2tgO-TJqN9ZuEwZ_tF8TuYEvI_NjjWRlqLn8lV0N3X8wNSR_a4oN3tUnQo59asSOke7x-7SeiZbKVVG8-oorKqYAiupGsStxTqpfmNkkLzb-lZF0laEQGGx8dDjFYJD2MT_cdkhQcmtuxJd_6TQLHk5w7KZiT_U2bxlTChKaHc2VwNWSlrf.Ga0KPPPCRoH41N5a-oSM2A";

        // var response = await axios.get(url, {
        //     params: {
        //         minorversion: 65,

        //     },
        //     headers: {
        //         'Authorization': `Bearer ${bearerToken}`,
        //         'Accept': 'application/json',

        //     }
        // })

        // console.log(`The response for API call is :${JSON.stringify(response.data)}`);

        // const url = 'https://sandbox-quickbooks.api.intuit.com/v3/company/4620816365281111480/' + lowerCaseEntity + '/' + id;
        // var response = await axios.get(url, {
        //     params: {
        //         minorversion: 65,
        //     },
        //     headers: {
        //         'Authorization': `Bearer ${bearerToken}`,
        //         'Accept': 'application/json',
        //     }
        // })


        ////////////////////////////////////////////////////////////////
        
        // console.log("authResponse  Response", JSON.parse(authResponse.text()));

        // If(authResponse.)
        // var data = {
        //     "orderDate": new Date(),
        //     "customerNumber": "GL00000008",
        //     "currencyCode": "GBP",
        //     "paymentTermsId": "3bb5b4b6-ea4c-43ca-ba1c-3b69e29a6668"
        // };
        // const user = await axios.post("https://api.businesscentral.dynamics.com/v2.0/bd2ac605-0345-4baf-ad17-20a2ae35dcb5/demo/api/v2.0/companies(425185e4-048b-ed11-aad6-000d3a38e688)/salesOrders?tenant=bd2ac605-0345-4baf-ad17-20a2ae35dcb5", data, {
        //     auth: {
        //         username: "SAURABH.TALELE",
        //         password: "H9x+reA4FSq7PvWYye/PXiHUq+OAGOObdKNrqTkK5bs="
        //     }
        // })
        // console.log("authResponse  Response", JSON.parse(user.text()))