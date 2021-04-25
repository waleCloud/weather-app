import React, { createContext } from 'react';

import { Action, State } from './types';

interface Context {
  dispatch: React.Dispatch<Action>;
  state: State;
}

export const initialState: State = {
  loading: true,
  error: false,
  degreeType: 'CELCIUS',
  weather: {
    date: [
      {
        date: '',
        time: '',
        temp: '',
        description: '',
        descriptionTitle: '',
      }
    ]
  }
}

export const WeatherReportContext = createContext<Context>({
  dispatch: () => undefined,
  state: initialState,
});
