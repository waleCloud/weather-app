import { Action, State } from './types';

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'LOADING_SET':
      return {
        ...state,
        loading: action.payload.loading
      }
    
    case 'ERROR_SET': {
      return {
        ...state,
        error: action.payload.error,
      };
    }

    case 'WEATHER_SET': {
      return {
        ...state,
        weather: action.payload.weather,
      };
    }
  
    default:
      return state;
  }
};
