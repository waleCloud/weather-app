import React from 'react';

import { Container, CssBaseline, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { WeatherCardWrapper } from '../../components/WeatherCardWrapper';
import { BarChart } from '../../components/Charts';

export const WeatherInfoPage: React.FC = () => {
  return (
    <>
     <CssBaseline />
      <Container>
        <RadioGroup row aria-label="Degree" name="temperature-degree" defaultValue="celcius">
          <FormControlLabel
            value="celcius"
            control={<Radio color="primary" />}
            label="Celcius"
          />
          <FormControlLabel
            value="fahrenheit"
            control={<Radio color="primary" />}
            label="Fahrenheit"
          />
        </RadioGroup>
        <WeatherCardWrapper />
        <div style={{ marginTop: '2rem' }}>
          <BarChart />
        </div>
      </Container> 
    </>
  );
}
