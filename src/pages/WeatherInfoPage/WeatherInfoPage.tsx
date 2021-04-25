import React, { useContext } from 'react';

import { Container, CircularProgress, CssBaseline, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { WeatherCardWrapper } from '../../components/WeatherCardWrapper';
import { BarChart } from '../../components/Charts';
import { WeatherReportContext } from '../../context';
import { useLoadWeather } from './hooks';

const PageHandler = (props: any) => {
  if (props.loading === true) {
    return (
      <> Fetching weather information <CircularProgress /> </>
    )
  } else if (props.error === true) {
    return (
      <p>
      Opps! something went wrong, Please refresh the page, if the problem persists, do contact us weather(at)payonner.com
      </p>
    )
  } else {
    return <>{props.children}</>
  }
}

export const WeatherInfoPage: React.FC = () => {
  useLoadWeather();
  const { state: { loading, error, degreeType } } = useContext(WeatherReportContext);
  return (
    <PageHandler loading={Boolean(loading)} error={error}>
     <CssBaseline />
      <Container>
        <RadioGroup row aria-label="Degree" name="temperature-degree" defaultValue={degreeType}>
          <FormControlLabel
            value="CELCIUS"
            control={<Radio color="primary" />}
            label="Celcius"
          />
          <FormControlLabel
            value="FAHRENHEIT"
            control={<Radio color="primary" />}
            label="Fahrenheit"
          />
        </RadioGroup>
        <WeatherCardWrapper />
        <div style={{ marginTop: '2rem' }}>
          <BarChart />
        </div>
      </Container> 
    </PageHandler>
  );
}
