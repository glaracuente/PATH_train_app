const gtfs = require("gtfs");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  user: { type: String, required: true },
  route: { type: String, required: true },
  dir: { type: String, required: true }
});

const History = mongoose.model("History", historySchema);

module.exports = {
  saveLastRoute: function(req, res) {
    History.create({
      user: "gerry@aol.com",
      route: req.params.routeid,
      dir: req.params.dir
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getTimes: function(req, res) {
    let routeid = req.params.routeid;
    let dir = req.params.dir;

    if (parseInt(routeid) < 100) {
      res.json([["Hello"], ["World"]]);
    }

    let result = [];
    let stopCount = 0;

    gtfs
      .getStops({
        agency_key: "path",
        route_id: routeid,
        direction_id: dir //0 - 33rd to hoboken 1 -  hoboken to 33rd (0 means reverse of long_name)
      })
      .then(stops => {
        stops.forEach(function(stop) {
          stopCount++;
        });

        stops.forEach(function(stop) {
          console.log(stop.stop_name + ": " + stop.stop_id);
          gtfs
            .getStoptimes({
              agency_key: "path",
              stop_id: stop.stop_id,
              route_id: routeid
              //service_id: "c_16420_b_18244_d_31" //weekdays
            })
            .then(stoptimes => {
              current = [];
              stoptimes.forEach(function(stoptime) {
                current.push(stoptime.arrival_time);
              });
              current = current.reverse();
              current.unshift(stop.stop_name);
              current.unshift(stop.stop_id);

              result.push(current);

              if (result.length === stopCount) {
                res.json(result);
              }
            })
            .catch(err => res.status(422).json(err));
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
