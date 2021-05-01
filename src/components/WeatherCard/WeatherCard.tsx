import React from 'react';

import { Card, CardActionArea, CardContent } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface WeatherCardProps {
  day: string;
  temperature: number;
  date: string;
  weatherDescription: string;
  onClick(event: React.MouseEvent<HTMLElement>) : void;
  degree: string
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
  onClick,
  degree
}) => {
  const classes = useStyles();
  const deg = degree.split('');
  return (
    <Card className={classes.root} data-testid="card">
      <CardActionArea onClick={onClick}>
        <CardContent>
          <Typography variant="h5"> {day} <Typography variant="body2">{weatherDescription} </Typography></Typography>
          <Typography data-testid="card-temp" variant="h3">
            {`${temperature}`} <sup>{deg[0]}</sup><b>{deg[1]}</b>
          </Typography>
          <Typography data-testid="card-date" variant="body2"> {`${date}`} </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
