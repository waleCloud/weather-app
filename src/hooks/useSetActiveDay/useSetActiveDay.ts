import { useCallback, useContext } from 'react';
import { WeatherReportContext } from '../../context';

export const useSetActiveDay = () => {
  const { dispatch } = useContext(WeatherReportContext);

  return useCallback((activeDay: any[]) => {    
    dispatch({ type: 'ACTIVE_DAY_SET', payload: { activeDay: [...activeDay] } });
  },[dispatch]);
}
