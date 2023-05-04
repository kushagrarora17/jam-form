const mongoose = require("mongoose");
const db = require("../database");

// create an schema
const eventSchema = new mongoose.Schema({
  id: String,
  title: String,
  date: Date,
  time: String,
  location: String,
  duration: Number,
  cost: Number,
});

const Event = mongoose.model("Event", eventSchema);

module.exports = {
  createEvent: function (input, cb) {
    const eventData = new Event(input);
    eventData
      .save()
      .then((data) => cb(data))
      .catch((err) => {
        throw err;
      });
  },
  getAllEvents: function (cb) {
    Event.find({})
      .then((data) => cb(data))
      .catch((err) => {
        throw err;
      });
  },
  getEventById: function (id, cb) {
    Event.findOne({ id })
      .then((data) => cb(data))
      .catch((err) => {
        throw err;
      });
  },
  updateEvent: function (id, update, cb) {
    Event.updateOne({ id }, update)
      .then((data) => cb(data))
      .catch((err) => {
        throw err;
      });
  },
  deleteEvent: function (id, cb) {
    Event.findOneAndDelete({ id })
      .then((data) => cb(data))
      .catch((err) => {
        throw err;
      });
  },
};
