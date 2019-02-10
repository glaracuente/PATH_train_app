const db = require("../models");
const gtfs = require("gtfs");

module.exports = {
  getTimes: function(req, res) {
    gtfs
      .getStoptimes(
        {
          agency_key: "path",
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
        let result = [];
        stoptimes.forEach(function(stoptime) {
          result.push(stoptime.arrival_time);
        });
        res.json(result);
      })
      .catch(err => res.status(422).json(err));
  },
  findAll: function(req, res) {
    db.Book.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Book.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
