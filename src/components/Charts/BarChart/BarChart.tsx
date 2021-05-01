import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import {
  Chart,
  BarSeries,
  Title,
  ArgumentAxis,
  ValueAxis,
} from '@devexpress/dx-react-chart-material-ui';

import { Animation } from '@devexpress/dx-react-chart';
import { WeatherReportContext } from '../../../context';

export const BarChart: React.FC = () => {
  const { state: { activeDay } } = useContext(WeatherReportContext);

  const chartData = activeDay.map(day => {
    return {
      time: day.time,
      temperature: day.temp,
    }
  });

  return (
    <Paper>
      <Chart
        data={chartData}
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
