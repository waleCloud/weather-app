export interface State {
  loading: boolean;
  error: boolean;
  degreeType: Unit;
  weather: Weather;
  activeDay: any[];
}

export type Action = SetLoading | SetError | SetWeather | SetActiveDay | SetDegree;

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

export type ActiveDay = {
    date: string;
    time: string;
    temp: number;
    description: string;
    descriptionTitle: string;
  }[]

export interface SetActiveDay {
  type: 'ACTIVE_DAY_SET';
  payload: {
    activeDay: any[]
  }
}

export interface SetDegree {
  type: 'DEGREE_SET',
  payload: {
    degreeType: Unit
  }
}

export type Unit = 'metric' | 'imperial';

export interface Weather {
  [date: string]: {
    date: string;
    time: string;
    temp: number;
    description: string;
    descriptionTitle: string;
  }[]
}
