import React, { useContext } from 'react';

import { Container, CircularProgress, CssBaseline, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { WeatherCardWrapper } from '../../components/WeatherCardWrapper';
import { BarChart } from '../../components/Charts';
import { WeatherReportContext, Unit } from '../../context';
import { useLoadWeather } from './hooks';
import { useChangeDegree } from '../../hooks/useChangeDegree';

const PageHandler = (props: any) => {
  if (props.loading === true) {
    return (
      <div data-testid="loading"> Fetching weather information... <CircularProgress /> </div>
    )
  } else if (props.error === true) {
    return (
      <div data-testid="error">
      Opps! something went wrong, Please refresh the page, if the problem persists, do contact us weather(at)payoneer.com
      </div>
    )
  } else {
    return <>{props.children}</>
  }
}

export const WeatherInfoPage: React.FC = () => {
  useLoadWeather();
  const { state: { loading, error, degreeType } } = useContext(WeatherReportContext);

  const handleChange = useChangeDegree();
  return (
    <PageHandler loading={Boolean(loading)} error={error}>
     <CssBaseline />
      <Container data-testid="weather-info-page">
        <RadioGroup role="radio" row aria-label="Degree" name="temperature-degree" value={degreeType} onChange={e => handleChange(e.target.value as Unit)}>
          <FormControlLabel
            value="metric"
            /* @ts-ignore */
            control={<Radio inputProps={{ "data-testid": "radio-celcius"}} color="primary" />}
            label="Celcius"
            role="radio"
          />
          <FormControlLabel
            value="imperial"
            /* @ts-ignore */
            control={<Radio inputProps={{"data-testid": "radio-fahrenheit"}} color="primary" />}
            label="Fahrenheit"
            role="radio"
          />
        </RadioGroup>
        <WeatherCardWrapper data-testid="card-wrapper" />
        <p>Click on a card to see timely weather details</p>
        <div style={{ marginTop: '2rem' }}>
          <BarChart />
        </div>
      </Container> 
    </PageHandler>
  );
}
