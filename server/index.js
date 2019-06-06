const NaturalLanguageUnderstandingV1 = require('watson-developer-cloud/natural-language-understanding/v1');

const naturalLanguageUnderstanding = new NaturalLanguageUnderstandingV1({
  version: '2019-04-02',
  iam_apikey: 'Z6iZ-ClMf8aHpjVxDOif52_AyYyqWv0PlYhhbiNHbOih',
  API_KEY: '7c9756e5-ce49-4315-96e5-a6f33d91ebaf:qFpeFlH49T4oAjdHxTiR0rF2JDHo7Yvy2t6rol4VtfifIhNoKxd1uYBoNd6cPh32',
  url: 'https://gateway-lon.watsonplatform.net/natural-language-understanding/api',
});

function main(params) {
  const parameters = {
    url: params.url,
    features: {
      entities: {
        emotion: true,
        limit: 8,
      },
    },
  };

  return new Promise((resolve, reject) => {
    naturalLanguageUnderstanding.analyze(parameters, (err, response) => {
      if (err) {
        reject({
          status: 500,
          body: err,
        })
      } else {
        resolve({
          status: 200,
          body: response,
        })
      }
    })
  })
}
