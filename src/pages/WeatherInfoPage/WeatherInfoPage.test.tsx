import { fireEvent, render } from '@testing-library/react';

import { WeatherInfoPage } from './WeatherInfoPage';
import { initialState, State, Unit, WeatherReportContext } from '../../context';

jest.mock('./hooks');
const dispatch = jest.fn();
const handleChange = jest.fn()

const createState = (loading: boolean, error: boolean, unit: Unit): State => {
  const state = { ...initialState };
  state.loading = loading;
  state.error = error;
  state.degreeType = unit;
  return state;
};

const RenderWeatherInfoPage = ({loading = false, error = false, unit = 'metric'}) => {
  return (
    <WeatherReportContext.Provider
      value={{
        dispatch,
        state: createState(loading, error, unit as Unit),
      }}
    >
      <WeatherInfoPage />
    </WeatherReportContext.Provider>
  )
}

describe('WeatherInfoPage', () => {
  const mockedRect = {
    x: 0,
    y: 0,
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 10,
    height: 12,
    toJSON: () => '',
  };
  const originalGetBBox = SVGElement.prototype.getBBox;
  beforeEach(() => SVGElement.prototype.getBBox = () => {
    return mockedRect;
  });
  afterEach(() => (SVGElement.prototype.getBBox = originalGetBBox));

  test('should show loading spinner when fetching', () => {
    const { getByTestId, queryByTestId } = render(<RenderWeatherInfoPage loading />);
    expect(getByTestId('loading')).toHaveTextContent(/Fetching weather information/);
    expect(queryByTestId('weather-info-page')).not.toBeInTheDocument();
  });

  test('should show Error message when fetch fails', () => {
    const { getByTestId, queryByTestId } = render(<RenderWeatherInfoPage error />);
    expect(getByTestId('error')).toHaveTextContent('Opps! something went wrong, Please refresh the page, if the problem persists, do contact us weather(at)payoneer.com');
    expect(queryByTestId('weather-info-page')).not.toBeInTheDocument();
  });
  
  test('should display weather info page', () => {
    const { getByTestId, queryByText } = render(<RenderWeatherInfoPage loading={false} error={false} />);
    expect(getByTestId('weather-info-page')).toBeInTheDocument();
    expect(queryByText('Click on a card to see timely weather details')).toBeInTheDocument();
  });
  
  test('should be able to click unit options', () => {
    const { getByTestId } = render(<RenderWeatherInfoPage />);
    const celciusOption = getByTestId('radio-celcius');
    const fahrenOption = getByTestId('radio-fahrenheit');
    fireEvent.click(celciusOption);
    expect(celciusOption).toBeChecked();
    expect(fahrenOption).not.toBeChecked();
  });
});
