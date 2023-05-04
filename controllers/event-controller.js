var eventModel = require("../models/event-model");

module.exports = {
  createEvent: function (req, res) {
    const inputData = req.body;
    eventModel.createEvent(inputData, function (data) {
      console.log("create success: ", data.id);
      res.status(201).end();
    });
  },
  getAllEvents: function (req, res) {
    eventModel.getAllEvents(function (data) {
      res.status(200).send(data);
    });
  },
  getEventById: function (req, res) {
    eventModel.getEventById(req.params.id, function (data) {
      res.status(200).json(data).end();
    });
  },
  updateEvent: function (req, res) {
    const editId = req.params.id;
    const inputData = req.body;
    eventModel.updateEvent(editId, inputData, function (data) {
      console.log("update success: ", data.id);
      res.status(200).json(data).end();
    });
  },
  deleteEvent: function (req, res) {
    var deleteId = req.params.id;
    eventModel.deleteEvent(deleteId, function (data) {
      console.log("delete success: ", data.id);
      res.status(204).send().end();
    });
  },
};
