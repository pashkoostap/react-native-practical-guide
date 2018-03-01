const functions = require("firebase-functions");
const cors = require("cors")({ origin: true });
const fs = require("fs");
const UUID = require("uuid-v4");

const googleCloudConfig = {
  projectId: "react-native-practical-guide",
  keyFilename: "react-native-practical-guide.json"
};
const googleCloudStorage = require("@google-cloud/storage")(googleCloudConfig);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// URL https://us-central1-react-native-practical-guide.cloudfunctions.net/storeImage
exports.storeImage = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const body = JSON.parse(req.body);

    fs.writeFileSync(
      "/tmp/uploaded-image.jpg",
      body.placeImage,
      "base64",
      err => {
        return res.status(500).json({ err });
      }
    );

    const bucket = googleCloudStorage.bucket(
      "react-native-practical-guide.appspot.com"
    );
    const uuid = UUID();

    bucket.upload(
      "/tmp/uploaded-image.jpg",
      {
        uploadType: "media",
        destination: `/places/${uuid}.jpg`,
        metadata: {
          metadata: {
            contentType: "image/jpeg",
            firebaseStorageDownloadTokens: uuid
          }
        }
      },
      (err, file) => {
        if (!err) {
          return res.status(201).json({
            imageUrl:
              "https://firebasestorage.googleapis.com/v0/b/" +
              bucket.name +
              "/o/" +
              encodeURIComponent(file.name) +
              "?alt=media&token=" +
              uuid
          });
        } else {
          res.status(500).json({ err });
        }
      }
    );
  });
});
