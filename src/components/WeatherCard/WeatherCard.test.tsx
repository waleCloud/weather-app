import { fireEvent, render } from '@testing-library/react';

import { WeatherCard } from './WeatherCard'

describe('WeatherCard', () => {
  const props = {
    day: 'Monday',
    temperature: 7,
    date: '2021-12-12',
    weatherDescription: 'cloudy meatball',
    degree: 'oF',
    onClick: () => {},
  };

  test('should render correctly with required props', () => {
    const { getByTestId } = render(<WeatherCard {...props} />);

    expect(getByTestId('card')).toBeInTheDocument();
    expect(getByTestId('card-temp')).toHaveTextContent('7 oF');
    expect(getByTestId('card-date')).toHaveTextContent(/2021-12-12/);
  });
  
});
