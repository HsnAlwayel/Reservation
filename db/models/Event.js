module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Event", {
    organizer: {
      type: DataTypes.STRING(20),
    },
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    numOfSeats: {
      type: DataTypes.INTEGER,
    },
    bookedSeats: {
      type: DataTypes.INTEGER,
    },
    startDate: {
      type: DataTypes.DATE,
    },
    endDate: {
      type: DataTypes.DATE,
    },
    image: {
      type: DataTypes.STRING,
    },
  });
};
