const db = require("../models");
const Position = db.positions;

exports.findAll = (req, res) => {
  Position.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      });
    });
};

exports.findOnenn = (req, res) => {
  const id = req.params.id;
  Position.findById(id)
    .then(data => {
      if(!data)
        res.status(404).send({message: "Not Found"});
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error"
      });
    });
};