import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { WeatherCard } from '../WeatherCard';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const WeatherCardWrapper: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid container>
        <Grid item container xs={12}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          <IconButton onClick={() => { alert('clicked') }}>
            <ArrowBackIcon />
          </IconButton>
          <IconButton onClick={() => { alert('clicked') }}>
            <ArrowForwardIcon />
          </IconButton>
        </Grid>
      </Grid>
      {[0, 1, 2].map((value) => (
        <Grid key={value} item xs={12} sm={4}>
          <WeatherCard
            day="Wednessday"
            date="21-04-2021"
            temperature="30 degree celcius"
            onClick={e => console.log(e)}
            weatherDescription="A Sunny day"
          />
        </Grid>
      ))}
    </Grid>
  )
}
