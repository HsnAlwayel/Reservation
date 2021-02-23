const { Event } = require("../db/models/index.js");

//Fetch
exports.fetchEvent = async (eventId) => {
  try {
    const event = await Event.findByPk(eventId);
    return event;
  } catch (error) {
    next(error);
  }
};

//List
exports.eventList = async (req, res, next) => {
  try {
    const events = await Event.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      options: {
        sort: {
          startDate: -1,
        },
      },
    });
    res.json(events);
  } catch (error) {
    next(error);
  }
};

exports.eventBookedList = async (req, res, next) => {
  try {
    const events = await Event.findAll({
      attributes: { exclude: ["createdAt", "updatedAt"] },
      options: {
        sort: {
          startDate: -1,
        },
      },
    });
    events.filter((event) => {
      event.numOfSeats === event.bookedSeats;
    });
    res.json(events);
  } catch (error) {
    next(error);
  }
};

//Create
exports.eventCreate = async (req, res, next) => {
  try {
  } catch (error) {}
};
//Update
exports.eventUpdate = async (req, res, next) => {
  try {
    await req.event.update(req.body);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
//Delete
exports.eventDelete = async (req, res, next) => {
  try {
    await req.event.destroy();
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
