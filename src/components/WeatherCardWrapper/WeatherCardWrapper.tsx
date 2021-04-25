import React, { useCallback, useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import { WeatherCard } from '../WeatherCard';
import { WeatherReportContext } from '../../context';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

export const WeatherCardWrapper: React.FC = () => {
  const { state: { weather } } = useContext(WeatherReportContext);
  const classes = useStyles();
  const date = Object.keys(weather);

  const [leftArrow, setLeftArrow] = useState(0);
  const [rightArrow, setRightArrow] = useState(3);

  const handleLeftArrow = useCallback(() => {
    if (leftArrow > 0) {
      setLeftArrow(leftArrow-1);
      setRightArrow(rightArrow-1);
    } else {
      setLeftArrow(0);
      setRightArrow(3);
    }
    // useSetActiveDay(weather?.[date[leftArrow]][0])
  },[leftArrow, rightArrow]);

  const handleRightArrow = useCallback(() => {
    if (rightArrow >= 3 && rightArrow <= date.length) {
      setLeftArrow(leftArrow+1);
      setRightArrow(rightArrow+1);
    } else {
      setLeftArrow(0);
      setRightArrow(3);
    }
    // useSetActiveDay(weather?.[date[leftArrow]][0])
  },[date.length, leftArrow, rightArrow]);

  // have a useEffect for updating ActiveDah
  // useEffect(() => // useSetActiveDay(weather?.[date[leftArrow]][0]))

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
            day="Wednessday"
            date={weather?.[currentdate][0].date}
            temperature={weather?.[currentdate][0].temp}
            onClick={e => console.log(e)} // useSetActiveDay(weather?.[date[leftArrow]][0])
            weatherDescription={weather?.[currentdate][0].description}
          />
        </Grid>
      )}
    </Grid>
  )
}
