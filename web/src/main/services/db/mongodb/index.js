const MongoClient = require('mongodb').MongoClient;
const MONGO_URL = "mongodb://Miguel:Alatriste007@ds125602.mlab.com:25602/interview";


module.exports = function (app) {
    MongoClient.connect(MONGO_URL)
        .then((client) => {
              const db = client.db('interview')
              app.news = db.collection('news')
              app.auth = db.collection('auth')
          })
        .catch((err) => console.error(err))

};
