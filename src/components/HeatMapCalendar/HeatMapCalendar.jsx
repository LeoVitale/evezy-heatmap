import React from 'react';
import getWeekOfMonth from 'date-fns/getWeekOfMonth';
import HeatMap from 'components/HeatMap';
import { setDateRange, chunkCalendar } from 'utils/date';
import { Container } from './styles';

const HeatMapCalendar = ({ startDate, endDate, data }) => {
  const weeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];

  const setMonthLabelsPositions = (weeks, offSet) => {
    return weeks.map(week => {
      const date = new Date(week[6]);
      const weekNumber = getWeekOfMonth(date);

      if (weekNumber === offSet) {
        return months[date.getMonth()];
      }
      return '';
    });
  };

  const columns = chunkCalendar(setDateRange(startDate, endDate), 7) || [];
  const positionedMonths = setMonthLabelsPositions(columns, 1);
  return (
    <Container>
      <HeatMap xLabels={positionedMonths} yLabels={weeks} columns={columns} data={data} />
    </Container>
  );
};

export default HeatMapCalendar;
