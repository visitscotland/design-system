/**
 * Define connection details and response transformations for remote config here
 *
 * Export object, each key defines a named remote config profile.
 *
 * See Contentful example below for details:
 */

// const transformConfig = require("../build/contentful-response-transform")

// module.exports = {
//  contentful: {
//     /**
//      * URI base is required and is the URL to poll for config, without query params
//      */
//     uriBase: "https://cdn.contentful.com/spaces/xxxxxxxxxxxx/environments/master/entries",
//     /**
//      * Map of query params to add to the request
//      */
//     uriParams: {
//       access_token: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
//       content_type: "instance",
//       include: 5,
//     },
//     /**
//      * Function(s) to process the response returned by the initial request. Can take
//      * a number of forms, as documented below. Make sure to return the transformed response.
//      */
//
//     // Option 1: a single function, which is called with the apiResponse as its only argument
//
//     transformResponse: transformConfig.transformRawResponse,
//
//     // Options 2: an object consisting of func, and optionally args keys. The func key should have the
//     // transforming function as its value and the args key an array of args that are supplied to it along with the
//     // response (which is always the first arg)
//
//     transformResponse: {
//       func: transformConfig.transformRawResponse,
//       args: [
//         "arg 1",
//         { second: "arg" }
//       ]
//     }
//
//     // Option 3: an array of either or both of the above to options
//
//     transformResponse: [
//       {
//         func: transformConfig.transformRawResponse,
//         args: [
//           "arg 1",
//           { second: "arg" }
//         ]
//       },
//       transformConfig.transformRawResponse
//     ]
//   }
// }

const hippoLocal = {
  uriBase: "http://localhost:8080/site/api/documents/1a0752b4-fda4-4289-9fff-69248c8de2ff",
  transformResponse: {
    func: require("../build/remote-response-transform-hippo").transformRawResponse,
    args: [
      {
        projectName: "myproject",
      },
    ],
  },
}

const contentful = {
  uriBase:
    "https://cdn.contentful.com/spaces/" +
    process.env.REMOTE_CONFIG_CONTENTFUL_SPACE +
    "/environments/master/entries",
  uriParams: {
    access_token: process.env.REMOTE_CONFIG_CONTENTFUL_TOKEN,
    content_type: "instance",
    include: 5,
  },
  transformResponse: require("../build/remote-response-transform-contentful").transformRawResponse,
}

module.exports = {
  contentful,
  hippoLocal,
}
