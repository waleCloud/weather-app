import { act, renderHook } from '@testing-library/react-hooks';
import fetch from 'jest-fetch-mock';

import { API, useLoadWeather } from './useLoadWeather';
import { initialState, State, WeatherReportContext, Unit } from '../../../../context';

jest.mock('../../../../helpers.ts');

const dispatch = jest.fn();

const createState = (loading: boolean, error: boolean, unit: Unit): State => {
  const state = { ...initialState };
  state.loading = loading;
  state.error = error;
  state.degreeType = unit;
  return state;
};

const { weather } = initialState;

const renderuseLoadWeather = (loading = false, error = false, unit: Unit = 'metric') =>
  renderHook(() => useLoadWeather(), {
    wrapper: ({ children }) => (
      <WeatherReportContext.Provider
        value={{
          dispatch,
          state: createState(loading, error, unit),
        }}
      >
        {children}
      </WeatherReportContext.Provider>
    ),
  });

  describe('useLoadWeather', () => {
    beforeEach(() => {
      fetch.resetMocks();
    });  
    afterEach(() => {
      jest.restoreAllMocks();
    });

    test('should call the correct endpoint', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: weather }));
      renderuseLoadWeather(false);
      expect(fetch).toHaveBeenCalledWith(`${API}&units=metric`);
    });

    test('should fetch reports with the supplied units Fahrenheit', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: weather }));
      await act(async () => {
        await renderuseLoadWeather(false, false, 'imperial').result.current;
      });
      
      expect(fetch).toHaveBeenCalledWith(`${API}&units=imperial`);
    });
    
    test('should dispatch correct loading state', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: weather }));
      renderuseLoadWeather(true);
      expect(dispatch).toHaveBeenCalledWith({
        type: 'LOADING_SET',
        payload: {
          loading: true
        }
      });
    });
    
    test('should dispatch correct weather data', async () => {
      fetch.mockResponseOnce(JSON.stringify({ result: weather }));
      await act(async () => {
         renderuseLoadWeather();
      });
      expect(dispatch).toHaveBeenCalledTimes(3);
    });

    test('should dispatch error state', async () => {
      fetch.mockReject(new Error('error fetching'));
      await act(async () => {
        await renderuseLoadWeather(false, false, 'imperial').result.error;
      });
      expect(dispatch).toHaveBeenCalledWith({
        type: 'ERROR_SET',
        payload: { error: true }
      });
    });
    
  });
