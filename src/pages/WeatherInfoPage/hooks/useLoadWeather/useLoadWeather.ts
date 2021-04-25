import { useCallback, useContext, useEffect } from 'react';
import { Weather, WeatherReportContext } from '../../../../context';

const API = 'https://api.openweathermap.org/data/2.5/forecast?q=Munich,de&APPID=75f972b80e26f14fe6c920aa6a85ad57&cnt=40';

export const useLoadWeather = () => {
  const { dispatch } = useContext(WeatherReportContext);

  const getReports = useCallback(async () => {
    try {
      dispatch({ type: 'LOADING_SET', payload: { loading: true } });
      const response = await fetch(API);
      const result = await response.json();
      
      const { list } = result;
      // const formatList = list.map(lst => {
        
      // });

      console.log({list});

      const weather: Weather = {
          reports: {
            day: [
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
      dispatch({ type: 'WEATHER_SET', payload: { weather } });

      dispatch({ type: 'LOADING_SET', payload: { loading: false } });
    } catch {
      dispatch({ type: 'LOADING_SET', payload: { loading: false } });
      dispatch({ type: 'ERROR_SET', payload: { error: true } });
    }
  }, [dispatch]);

  useEffect(() => {
    getReports();
  }, [getReports]);
};
