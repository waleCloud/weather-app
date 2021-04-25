export interface State {
  loading: boolean;
  error: boolean;
  degreeType: 'CELCIUS' | 'FAHRENHEIT';
  weather: Weather;
}

export type Action = SetLoading | SetError | SetWeather;

export interface SetLoading {
  type: 'LOADING_SET';
  payload: {
    loading: boolean;
  };
}

export interface SetError {
  type: 'ERROR_SET';
  payload: {
    error: boolean;
  };
}

export interface SetWeather {
  type: 'WEATHER_SET';
  payload: {
    weather: Weather;
  };
}

export interface Weather {
  reports: {
    day: {
      date: string;
      time: string;
      temp: string;
      description: string;
      descriptionTitle: string;
    }[]
  };
}
