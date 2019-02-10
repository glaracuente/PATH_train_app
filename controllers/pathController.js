const gtfs = require("gtfs");

module.exports = {
  getTimes: function(req, res) {
    let routeid = req.params.routeid;
    let result = [];
    gtfs
      .getStops({
        agency_key: "path",
        route_id: routeid, //Hoboken - World Trade Center
        //route_id: "859", // route_long_name is Hoboken - 33rd Street
        direction_id: 1 //0 - 33rd to hoboken 1 -  hoboken to 33rd (0 means reverse of long_name)
      })
      .then(stops => {
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

              if (result.length === 4) {
                res.json(result);
              }
            })
            .catch(err => res.status(422).json(err));
        });
      })
      .catch(err => res.status(422).json(err));
  }
};
