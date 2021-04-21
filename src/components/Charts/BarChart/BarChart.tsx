import React from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';

export const BarChart: React.FC = () => {
  const data = [
    { time: '1950', temperature: 2.525 },
    { time: '1960', temperature: 3.018 },
    { time: '1970', temperature: 3.682 },
    { time: '1980', temperature: 4.440 },
    { time: '1990', temperature: 5.310 },
    { time: '2000', temperature: 6.127 },
    { time: '2010', temperature: 6.930 },
  ];

  return (
    <Paper>
      <Chart
        data={data}
      >
        <ArgumentAxis />
        <ValueAxis />

        <BarSeries
          valueField="temperature"
          argumentField="time"
        />
        <Title text="Temperatures during the day" />
        <Animation />
      </Chart>
    </Paper>
  );
}
