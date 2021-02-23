const express = require("express");
const router = express.Router();

const {
  eventList,
  eventBookedList,
  eventCreate,
  eventUpdate,
  eventDelete,
  fetchEvent,
} = require("../controllers/eventController");

//List
router.get("/", eventList);

//Booked List
router.get("/booked", eventBookedList);

//Create
router.post("/", eventCreate);

//Update
router.put("/:eventId", eventUpdate);

//Delete
router.delete("/:eventId", eventDelete);

module.exports = router;
