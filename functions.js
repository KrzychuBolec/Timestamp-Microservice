let formatDate = (date) => {
  let regex = /(^[^0]\d{3}-(0[\d]|1[12])-([0-2][0-9]|3[01])|^\d*\d$)/g; //regex to check valid date format

  let dateValues = [];

  if (regex.test(date) || date == "") {
    if (date.includes("-")) {
      dateValues = date.split("-");
      let newDate = new Date(dateValues[0], dateValues[1] - 1, dateValues[2]);
      return {
        unix: newDate.getTime(),
        utc: newDate.toString(),
      };
    } else {
      let newDate = new Date(parseInt(date));
      return { unix: parseInt(date), utc: newDate.toString() };
    }
  } else {
    return { error: "Invalid Date" };
  }
};

module.exports = {
  formatDate,
};
