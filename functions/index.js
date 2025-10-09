// functions/index.js
const {setGlobalOptions} = require("firebase-functions/v2");
const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

setGlobalOptions({maxInstances: 10});
admin.initializeApp();

exports.countBooks = onRequest(async (req, res) => {
  return cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      res.status(200).send({count: snapshot.size});
    } catch (error) {
      console.error(error);
      res.status(500).send({error: "Error Counting Books"});
    }
  });
});
