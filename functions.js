let formatDate = (date) => {
  if (date != undefined) {
    if (isNaN(date)) {
      let dateObject = new Date(date);
      if (isNaN(dateObject.getTime())) {
        return { error: "Invalid Date" };
      } else {
        return {
          unix: dateObject.getTime(),
          utc: dateObject.toUTCString(),
        };
      }
    } else {
      let dateObject = new Date(parseInt(date));
      return {
        unix: dateObject.getTime(),
        utc: dateObject.toUTCString(),
      };
    }
  } else {
    return {
      unix: new Date().getTime(),
      utc: new Date().toUTCString(),
    };
  }
};

module.exports = {
  formatDate,
};
