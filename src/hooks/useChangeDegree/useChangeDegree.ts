import { useCallback, useContext } from 'react';
import { Unit, WeatherReportContext } from '../../context';

export const useChangeDegree = () => {
  const { dispatch } = useContext(WeatherReportContext);

  return useCallback((unit: Unit) => {    
    dispatch({ type: 'DEGREE_SET', payload: { degreeType: unit } });
  },[dispatch]);
}
