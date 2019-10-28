export const getFormatedDate = dt => {
  let day = dt.getDate();
  let month = dt.getMonth() + 1;

  if (day < 10) {
    day = `0${day}`;
  }
  if (month < 10) {
    month = `0${month}`;
  }

  return `${dt.getFullYear()}-${month}-${day}`;
};

export const setDateRange = (startDate, endDate) => {
  const dates = [];
  const dt = new Date(startDate);
  while (dt <= endDate) {
    dates.push(getFormatedDate(dt));
    dt.setDate(dt.getDate() + 1);
  }

  return dates;
};
