import React, { useMemo, useReducer } from 'react';

import { WeatherReportContext, reducer, initialState } from './context';

export const WeatherReportProvider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const storeValue = useMemo(() => ({ dispatch, state }), [dispatch, state]);
  return (
    <WeatherReportContext.Provider value={storeValue}>
      {props.children}
    </WeatherReportContext.Provider>
  );
};
