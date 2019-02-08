const gtfs = require("gtfs");

const mongoose = require("mongoose");
const config = {
  mongoUrl: "mongodb://localhost:27017/gtfs"
};

mongoose.connect(config.mongoUrl, { useNewUrlParser: true });

/*
const mongoose = require("mongoose");
const db = require("../models");
const gtfs = require("gtfs");


mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/reactreadinglist"
);
*/

/*
gtfs
  .getTrips({
    route_id: "859"
  })
  .then(trips => {
    trips.forEach(function(trip) {
      gtfs
        .getStoptimes({
          trip_id: trip.trip_id
        })
        .then(stoptimes => {
          stoptimes.forEach(function(stoptime) {
            console.log(trip.trip_headsign);
            if (trip.service_id === "c_16420_b_18244_d_31") {
              console.log(stoptime.arrival_time);
              //console.log(trip.service_id);
            }
          });
        });
    });
  });
*/

/*
gtfs
  .getStops({
    agency_key: "county-connection",
    route_id: "859",
    direction_id: 0
  })
  .then(stops => {
    stops.forEach(function(stop) {
      console.log(stop.stop_name);
    });
  });
*/
// Get all stoptimes for a route and sort by stop_id
/*
gtfs
  .getStoptimes(
    {
      agency_key: "county-connection",
      stop_id: "781741",
      route_id: "859",
      service_id: "c_16420_b_18244_d_31",
      direction_id: 0
    },
    {
      _id: 0
    },
    {
      sort: { stop_id: 1 }
    }
  )
  .then(stoptimes => {
    stoptimes.forEach(function(stoptime) {
      console.log(stoptime.arrival_time);
    });
  });
*/
/*
  gtfs
  .getStoptimes(
    {
      agency_key: "county-connection",
      stop_id: "781741",
      route_id: "859",
      service_id: "c_16420_b_18244_d_31",
      direction_id: 0
    },
    {
      _id: 0
    },
    {
      sort: { stop_id: 1 }
    }
  )
  .then(stoptimes => {
    stoptimes.forEach(function(stoptime) {
      console.log(stoptime.arrival_time);
    });
  });
  */

gtfs.getCalendars({}, {}).then(calendar => {
  calendar.forEach(function(cal) {
    console.log(cal.service_name);
    console.log(cal.service_id);
  });
  return mongoose.connection.close();
});
