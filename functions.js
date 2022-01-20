let formatDate = (date) => {
  let regex = /(^[^0]\d{3}-(0[\d]|1[12])-([0-2][0-9]|3[01])|^\d*\d$)/g; //regex to check valid date format

  let dateValues = [];

  if (date != undefined) {
    if (regex.test(date)) {
      if (date.includes("-")) {
        dateValues = date.split("-");
        let newDate = new Date(dateValues[0], dateValues[1] - 1, dateValues[2]);
        return {
          unix: newDate.getTime(),
          utc: newDate.toUTCString(),
        };
      } else {
        let newDate = new Date(parseInt(date));
        return { unix: parseInt(date), utc: newDate.toUTCString() };
      }
    } else {
      return { error: "Invalid Date" };
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
