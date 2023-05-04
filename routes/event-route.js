var express = require("express");
var router = express.Router();
var eventController = require("../controllers/event-controller");
/* GET users listing. */
router.post("/create", eventController.createEvent);
router.get("/fetch", eventController.getAllEvents);
router.get("/fetch/:id", eventController.getEventById);
router.put("/update/:id", eventController.updateEvent);
router.delete("/delete/:id", eventController.deleteEvent);
module.exports = router;
