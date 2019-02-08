const mongoose = require("mongoose");
const gtfs = require("gtfs");
const Schema = mongoose.Schema;

/*
const bookSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Book", bookSchema);
*/

gtfs.getCalendars({}, {}).then(calendar => {
  calendar.forEach(function(cal) {
    console.log(cal.service_name);
    console.log(cal.service_id);
  });
  return mongoose.connection.close();
});

module.exports = Path;
