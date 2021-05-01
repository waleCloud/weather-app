import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getDay } from 'date-fns'

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { WeatherCard } from '../WeatherCard';
import { WeatherReportContext } from '../../context';
import { useSetActiveDay } from '../../hooks'

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const WeatherCardWrapper: React.FC = () => {
  const { state: { weather, degreeType } } = useContext(WeatherReportContext);
  const setActiveDay = useSetActiveDay();
  const classes = useStyles();
  const date = Object.keys(weather);

  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(3);

  useEffect(() => {
    setActiveDay(weather?.[date[0]]);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   },[]);

  const handleLeftArrow = useCallback(() => {
    if (leftArrow > 0) {
      setLeftArrow(leftArrow-1);
      setRightArrow(rightArrow-1);
    } else {
      setLeftArrow(0);
      setRightArrow(3);
    }
  },[leftArrow, rightArrow]);

  const handleRightArrow = useCallback(() => {
    if (rightArrow >= 3 && rightArrow <= date.length) {
      setLeftArrow(leftArrow+1);
      setRightArrow(rightArrow+1);
    } else {
      setLeftArrow(0);
      setRightArrow(3);
    }
  },[date.length, leftArrow, rightArrow]);

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return (
    <Grid container className={classes.root} spacing={3}>
      <Grid container>
        <Grid item container xs={12}
          direction="row"
          justify="space-between"
          alignItems="flex-start"
        >
          {leftArrow > 0 ? (
            <IconButton onClick={handleLeftArrow}>
              <ArrowBackIcon />
            </IconButton> 
            ): <> &nbsp; </>
          }
          {rightArrow !== date.length ? (
            <IconButton onClick={() => handleRightArrow()}>
              <ArrowForwardIcon />
            </IconButton>
            ):  <> &nbsp; </>
          }
        </Grid>
      </Grid>
      {date.slice(leftArrow, rightArrow).map((currentdate) =>
        <Grid key={currentdate} item xs={12} sm={4}>
          <WeatherCard
            day={days[getDay(new Date(weather?.[currentdate][0].date))]}
            date={weather?.[currentdate][0].date}
            temperature={weather?.[currentdate][0].temp}
            onClick={() => setActiveDay(weather?.[currentdate])} // useSetActiveDay(weather?.[date[leftArrow]][0])
            weatherDescription={weather?.[currentdate][0].description}
            degree={degreeType === 'imperial' ? 'oF' : 'oC' }
          />
        </Grid>
      )}
    </Grid>
  )
}
