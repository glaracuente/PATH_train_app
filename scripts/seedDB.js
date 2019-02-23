const gtfs = require("gtfs");

const mongoose = require("mongoose");
const config = {
  mongoUrl: process.env.MONGODB_URI || "mongodb://localhost:27017/gtfs",
  agencies: [
    {
      agency_key: "path",
      url: "http://data.trilliumtransit.com/gtfs/path-nj-us/path-nj-us.zip",
      exclude: ["shapes"]
    }
  ]
};

mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

gtfs
  .import(config)
  .then(() => {
    console.log("Import Successful");
    return mongoose.connection.close();
  })
  .catch(err => {
    console.error(err);
  });
