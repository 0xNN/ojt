module.exports = app => {
  const positions = require("../controllers/position.controller.js");

  var router = require("express").Router();

  router.get("/", positions.findAll);
  // router.get("/:id". positions.fin;

  app.use('api/positions', router);
}