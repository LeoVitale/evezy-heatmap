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

export const setDateRange = (std, edt) => {
  const startDate = new Date(std);
  const endDate = new Date(edt);

  const dates = [];
  const dt = new Date(startDate);
  while (dt <= endDate) {
    dates.push(getFormatedDate(dt));
    dt.setDate(dt.getDate() + 1);
  }

  return dates;
};

export const chunkCalendar = (dates, size) => {
  const chunked_arr = [];
  const firstDate = new Date(dates[0]);

  if (firstDate.getDay() !== 0) {
    const temp = [];
    for (let i = 0; i < firstDate.getDay(); i++) {
      temp.push('empty');
    }
    chunked_arr.push(temp);
  }

  for (let i = 0; i < dates.length; i++) {
    const last = chunked_arr[chunked_arr.length - 1];

    if (!last || last.length === size) {
      chunked_arr.push([dates[i]]);
    } else {
      last.push(dates[i]);
    }
  }
  return chunked_arr;
};
