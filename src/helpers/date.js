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

export const chunk = (array, size) => {
  const chunked_arr = [];
  const firstDate = new Date(array[0]);
  if (firstDate.getDay() !== 0) {
    const temp = [];
    for (let i = 0; i < firstDate.getDay(); i++) {
      temp.push('0000-00-00');
    }
    chunked_arr.push(temp);
  }
  for (let i = 0; i < array.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];

    if (!last || last.length === size) {
      chunked_arr.push([array[i]]);
    } else {
      last.push(array[i]);
    }
  }
  return chunked_arr;
};
