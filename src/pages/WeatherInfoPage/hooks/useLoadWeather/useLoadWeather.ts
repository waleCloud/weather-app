import { useCallback, useContext, useEffect } from 'react';

import { format } from 'date-fns';

import { groupBy, API_RESPONSE } from '../../../../helpers';
import { Weather, WeatherReportContext } from '../../../../context';

// const API = 'jhttps://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';

export const useLoadWeather = () => {
  const { dispatch } = useContext(WeatherReportContext);

  const getReports = useCallback(async () => {
    try {
      dispatch({ type: 'LOADING_SET', payload: { loading: true } });
      // const response = await fetch(API);
      // const result = await response.json();
      
      const list: any[] = API_RESPONSE.list;
      list.forEach(element => {
        element['date'] = format(new Date(element.dt_txt), 'yyyy-MM-dd');
        element['time'] = format(new Date(element.dt_txt), 'HH:mm:ss');
        element['temperature'] = element.main.temp;
        element['description'] = element.weather[0].description
        element['descriptionTitle'] = element.weather[0].main
      });

      const weather: Weather = groupBy(list, 'date');


      dispatch({ type: 'LOADING_SET', payload: { loading: false } });
      dispatch({ type: 'WEATHER_SET', payload: { weather } });
    } catch(error) {
      console.log({error});
      dispatch({ type: 'LOADING_SET', payload: { loading: false } });
      dispatch({ type: 'ERROR_SET', payload: { error: true } });
    }
  }, [dispatch]);

  useEffect(() => {
    getReports();
  }, [getReports]);
};
