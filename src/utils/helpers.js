const getDateString = (dateFromInput) => {
  return dateFromInput?.toJSON()?.split('T')[0]
}

const getYearAndMonthFromDateString = (dateString) => {
  return dateString.slice(0, 7);
}

const getYearAndMonthFromDate = (dateFromInput) => {
  const dateString = getDateString(dateFromInput);

  return getYearAndMonthFromDateString(dateString);
}

export const helpers = {
  getDateString,
  getYearAndMonthFromDate,
  getYearAndMonthFromDateString,
}
