import { renderHook } from '@testing-library/react-hooks';
import { initialState, State, WeatherReportContext, Unit } from '../../context';

import { useChangeDegree } from './useChangeDegree';

const dispatch = jest.fn();

const createState = (loading: boolean, error: boolean, unit: Unit): State => {
  const state = { ...initialState };
  state.loading = loading;
  state.error = error;
  state.degreeType = unit;
  return state;
};

const renderUseChangeDegree = (loading = false, error = false, unit: Unit = 'metric') =>
  renderHook(() => useChangeDegree()(unit), {
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

  describe('useChangeDegree', () => {
    test('should dispatch the metric unit', () => {
      renderUseChangeDegree();
      expect(dispatch).toHaveBeenCalledWith({
        type: 'DEGREE_SET', payload: { degreeType: 'metric' }
      })
    });

    test('should dispatch the imperial unit', () => {
      renderUseChangeDegree(false, false, 'imperial');
      expect(dispatch).toHaveBeenCalledWith({
        type: 'DEGREE_SET', payload: { degreeType: 'imperial' }
      })
    });
    
  });
  
