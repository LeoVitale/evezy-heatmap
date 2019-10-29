import React from 'react';
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

  const columns = chunkCalendar(setDateRange(startDate, endDate), 7);

  return (
    <Container>
      <HeatMap xLabels={months} yLabels={weeks} columns={columns} data={data} />
    </Container>
  );
};

export default HeatMapCalendar;
