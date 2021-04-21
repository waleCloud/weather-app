import React from 'react';

import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface WeatherCardProps {
  day: string;
  temperature: string;
  date: string;
  weatherDescription: string;
  onClick(event: React.MouseEvent<HTMLElement>) : void;
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export const WeatherCard:React.FC<WeatherCardProps> = ({
  day,
  temperature,
  date,
  weatherDescription,
  onClick
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography variant="h5"> {day} </Typography>
          <Typography variant="body2"> {`${date}, ${weatherDescription}`} </Typography>
          <Typography variant="h3">
            {temperature}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
