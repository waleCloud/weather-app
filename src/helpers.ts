
export const groupBy = (array: any[], key: string) =>
  array.reduce((result, currentValue) => {
    (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue
    );
    return result;
  }, {});

export const API_RESPONSE = {
  "cod": "200",
  "message": 0,
  "cnt": 40,
  "list": [
    {
      "dt": 1619352000,
      "main": {
        "temp": 287.92,
        "feels_like": 286.55,
        "temp_min": 287.04,
        "temp_max": 287.92,
        "pressure": 1024,
        "sea_level": 1024,
        "grnd_level": 959,
        "humidity": 42,
        "temp_kf": 0.88
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 47
      },
      "wind": {
        "speed": 3.24,
        "deg": 348,
        "gust": 4.03
      },
      "visibility": 10000,
      "pop": 0.09,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-25 12:00:00"
    },
    {
      "dt": 1619362800,
      "main": {
        "temp": 287.64,
        "feels_like": 286.24,
        "temp_min": 287.07,
        "temp_max": 287.64,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 958,
        "humidity": 42,
        "temp_kf": 0.57
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 37
      },
      "wind": {
        "speed": 3.47,
        "deg": 359,
        "gust": 3.55
      },
      "visibility": 10000,
      "pop": 0.05,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-25 15:00:00"
    },
    {
      "dt": 1619373600,
      "main": {
        "temp": 283.89,
        "feels_like": 282.4,
        "temp_min": 281.87,
        "temp_max": 283.89,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 958,
        "humidity": 53,
        "temp_kf": 2.02
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 26
      },
      "wind": {
        "speed": 2.06,
        "deg": 21,
        "gust": 3.14
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-25 18:00:00"
    },
    {
      "dt": 1619384400,
      "main": {
        "temp": 278.28,
        "feels_like": 275.5,
        "temp_min": 278.28,
        "temp_max": 278.28,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 958,
        "humidity": 67,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 42
      },
      "wind": {
        "speed": 3.45,
        "deg": 44,
        "gust": 7.29
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-25 21:00:00"
    },
    {
      "dt": 1619395200,
      "main": {
        "temp": 275.09,
        "feels_like": 271.92,
        "temp_min": 275.09,
        "temp_max": 275.09,
        "pressure": 1022,
        "sea_level": 1022,
        "grnd_level": 958,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 25
      },
      "wind": {
        "speed": 3.07,
        "deg": 56,
        "gust": 8.29
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-26 00:00:00"
    },
    {
      "dt": 1619406000,
      "main": {
        "temp": 273.61,
        "feels_like": 270.43,
        "temp_min": 273.61,
        "temp_max": 273.61,
        "pressure": 1021,
        "sea_level": 1021,
        "grnd_level": 956,
        "humidity": 88,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 24
      },
      "wind": {
        "speed": 2.75,
        "deg": 71,
        "gust": 8.2
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-26 03:00:00"
    },
    {
      "dt": 1619416800,
      "main": {
        "temp": 276.11,
        "feels_like": 272.74,
        "temp_min": 276.11,
        "temp_max": 276.11,
        "pressure": 1020,
        "sea_level": 1020,
        "grnd_level": 956,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 29
      },
      "wind": {
        "speed": 3.63,
        "deg": 70,
        "gust": 6.85
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-26 06:00:00"
    },
    {
      "dt": 1619427600,
      "main": {
        "temp": 282.5,
        "feels_like": 280.26,
        "temp_min": 282.5,
        "temp_max": 282.5,
        "pressure": 1018,
        "sea_level": 1018,
        "grnd_level": 956,
        "humidity": 55,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 54
      },
      "wind": {
        "speed": 4.21,
        "deg": 62,
        "gust": 5.16
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-26 09:00:00"
    },
    {
      "dt": 1619438400,
      "main": {
        "temp": 285.71,
        "feels_like": 284.22,
        "temp_min": 285.71,
        "temp_max": 285.71,
        "pressure": 1016,
        "sea_level": 1016,
        "grnd_level": 955,
        "humidity": 46,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 32
      },
      "wind": {
        "speed": 3.81,
        "deg": 52,
        "gust": 3.64
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-26 12:00:00"
    },
    {
      "dt": 1619449200,
      "main": {
        "temp": 285.94,
        "feels_like": 284.42,
        "temp_min": 285.94,
        "temp_max": 285.94,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 953,
        "humidity": 44,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 8
      },
      "wind": {
        "speed": 3.54,
        "deg": 51,
        "gust": 3.27
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-26 15:00:00"
    },
    {
      "dt": 1619460000,
      "main": {
        "temp": 281.11,
        "feels_like": 279.06,
        "temp_min": 281.11,
        "temp_max": 281.11,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 952,
        "humidity": 64,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01d"
        }
      ],
      "clouds": {
        "all": 6
      },
      "wind": {
        "speed": 3.25,
        "deg": 51,
        "gust": 7.24
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-26 18:00:00"
    },
    {
      "dt": 1619470800,
      "main": {
        "temp": 277.07,
        "feels_like": 274.18,
        "temp_min": 277.07,
        "temp_max": 277.07,
        "pressure": 1014,
        "sea_level": 1014,
        "grnd_level": 951,
        "humidity": 68,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 800,
          "main": "Clear",
          "description": "clear sky",
          "icon": "01n"
        }
      ],
      "clouds": {
        "all": 5
      },
      "wind": {
        "speed": 3.24,
        "deg": 73,
        "gust": 9.61
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-26 21:00:00"
    },
    {
      "dt": 1619481600,
      "main": {
        "temp": 276.32,
        "feels_like": 272.05,
        "temp_min": 276.32,
        "temp_max": 276.32,
        "pressure": 1012,
        "sea_level": 1012,
        "grnd_level": 949,
        "humidity": 79,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 801,
          "main": "Clouds",
          "description": "few clouds",
          "icon": "02n"
        }
      ],
      "clouds": {
        "all": 17
      },
      "wind": {
        "speed": 5.29,
        "deg": 89,
        "gust": 13.83
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-27 00:00:00"
    },
    {
      "dt": 1619492400,
      "main": {
        "temp": 274.87,
        "feels_like": 270.66,
        "temp_min": 274.87,
        "temp_max": 274.87,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 947,
        "humidity": 85,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03n"
        }
      ],
      "clouds": {
        "all": 49
      },
      "wind": {
        "speed": 4.52,
        "deg": 82,
        "gust": 11.77
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-27 03:00:00"
    },
    {
      "dt": 1619503200,
      "main": {
        "temp": 276.18,
        "feels_like": 272.2,
        "temp_min": 276.18,
        "temp_max": 276.18,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 947,
        "humidity": 77,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 73
      },
      "wind": {
        "speed": 4.66,
        "deg": 85,
        "gust": 8.43
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-27 06:00:00"
    },
    {
      "dt": 1619514000,
      "main": {
        "temp": 282.93,
        "feels_like": 280.91,
        "temp_min": 282.93,
        "temp_max": 282.93,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 946,
        "humidity": 58,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 55
      },
      "wind": {
        "speed": 3.93,
        "deg": 81,
        "gust": 4.51
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-27 09:00:00"
    },
    {
      "dt": 1619524800,
      "main": {
        "temp": 287.43,
        "feels_like": 286.25,
        "temp_min": 287.43,
        "temp_max": 287.43,
        "pressure": 1004,
        "sea_level": 1004,
        "grnd_level": 944,
        "humidity": 51,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 802,
          "main": "Clouds",
          "description": "scattered clouds",
          "icon": "03d"
        }
      ],
      "clouds": {
        "all": 49
      },
      "wind": {
        "speed": 2.69,
        "deg": 56,
        "gust": 2.31
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-27 12:00:00"
    },
    {
      "dt": 1619535600,
      "main": {
        "temp": 285.3,
        "feels_like": 284.4,
        "temp_min": 285.3,
        "temp_max": 285.3,
        "pressure": 1004,
        "sea_level": 1004,
        "grnd_level": 943,
        "humidity": 70,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 94
      },
      "wind": {
        "speed": 1.56,
        "deg": 325,
        "gust": 2.46
      },
      "visibility": 10000,
      "pop": 0.39,
      "rain": {
        "3h": 0.16
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-27 15:00:00"
    },
    {
      "dt": 1619546400,
      "main": {
        "temp": 282.21,
        "feels_like": 281.82,
        "temp_min": 282.21,
        "temp_max": 282.21,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 943,
        "humidity": 87,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 1.42,
        "deg": 300,
        "gust": 2.65
      },
      "visibility": 10000,
      "pop": 0.6,
      "rain": {
        "3h": 0.37
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-27 18:00:00"
    },
    {
      "dt": 1619557200,
      "main": {
        "temp": 281.32,
        "feels_like": 281.32,
        "temp_min": 281.32,
        "temp_max": 281.32,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 944,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.07,
        "deg": 243,
        "gust": 1.44
      },
      "visibility": 10000,
      "pop": 0.48,
      "rain": {
        "3h": 0.5
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-27 21:00:00"
    },
    {
      "dt": 1619568000,
      "main": {
        "temp": 281.15,
        "feels_like": 281.15,
        "temp_min": 281.15,
        "temp_max": 281.15,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 944,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.1,
        "deg": 248,
        "gust": 1.73
      },
      "visibility": 10000,
      "pop": 0.36,
      "rain": {
        "3h": 0.21
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-28 00:00:00"
    },
    {
      "dt": 1619578800,
      "main": {
        "temp": 279.62,
        "feels_like": 279.62,
        "temp_min": 279.62,
        "temp_max": 279.62,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 943,
        "humidity": 96,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 75
      },
      "wind": {
        "speed": 1.12,
        "deg": 273,
        "gust": 1.22
      },
      "visibility": 10000,
      "pop": 0.34,
      "rain": {
        "3h": 0.22
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-28 03:00:00"
    },
    {
      "dt": 1619589600,
      "main": {
        "temp": 281.52,
        "feels_like": 281.52,
        "temp_min": 281.52,
        "temp_max": 281.52,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 944,
        "humidity": 91,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 69
      },
      "wind": {
        "speed": 0.13,
        "deg": 255,
        "gust": 0.61
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-28 06:00:00"
    },
    {
      "dt": 1619600400,
      "main": {
        "temp": 285.33,
        "feels_like": 284.56,
        "temp_min": 285.33,
        "temp_max": 285.33,
        "pressure": 1005,
        "sea_level": 1005,
        "grnd_level": 944,
        "humidity": 75,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 85
      },
      "wind": {
        "speed": 0.39,
        "deg": 221,
        "gust": 1.34
      },
      "visibility": 10000,
      "pop": 0.24,
      "rain": {
        "3h": 0.17
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-28 09:00:00"
    },
    {
      "dt": 1619611200,
      "main": {
        "temp": 288.91,
        "feels_like": 287.93,
        "temp_min": 288.91,
        "temp_max": 288.91,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 943,
        "humidity": 53,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 92
      },
      "wind": {
        "speed": 1.63,
        "deg": 279,
        "gust": 2.94
      },
      "visibility": 10000,
      "pop": 0.51,
      "rain": {
        "3h": 0.28
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-28 12:00:00"
    },
    {
      "dt": 1619622000,
      "main": {
        "temp": 287.16,
        "feels_like": 286.42,
        "temp_min": 287.16,
        "temp_max": 287.16,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 943,
        "humidity": 69,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 1.65,
        "deg": 237,
        "gust": 2.66
      },
      "visibility": 10000,
      "pop": 0.81,
      "rain": {
        "3h": 0.68
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-28 15:00:00"
    },
    {
      "dt": 1619632800,
      "main": {
        "temp": 284.62,
        "feels_like": 283.99,
        "temp_min": 284.62,
        "temp_max": 284.62,
        "pressure": 1004,
        "sea_level": 1004,
        "grnd_level": 943,
        "humidity": 83,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 99
      },
      "wind": {
        "speed": 0.96,
        "deg": 225,
        "gust": 1.42
      },
      "visibility": 10000,
      "pop": 0.87,
      "rain": {
        "3h": 1.06
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-28 18:00:00"
    },
    {
      "dt": 1619643600,
      "main": {
        "temp": 282.83,
        "feels_like": 281.57,
        "temp_min": 282.83,
        "temp_max": 282.83,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 945,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 2.54,
        "deg": 263,
        "gust": 5.45
      },
      "visibility": 10000,
      "pop": 0.74,
      "rain": {
        "3h": 0.85
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-28 21:00:00"
    },
    {
      "dt": 1619654400,
      "main": {
        "temp": 282.18,
        "feels_like": 281.67,
        "temp_min": 282.18,
        "temp_max": 282.18,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 945,
        "humidity": 97,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.52,
        "deg": 216,
        "gust": 3.26
      },
      "visibility": 10000,
      "pop": 0.89,
      "rain": {
        "3h": 3.14
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-29 00:00:00"
    },
    {
      "dt": 1619665200,
      "main": {
        "temp": 281.68,
        "feels_like": 281.1,
        "temp_min": 281.68,
        "temp_max": 281.68,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 945,
        "humidity": 94,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 1.52,
        "deg": 181,
        "gust": 1.72
      },
      "visibility": 10000,
      "pop": 0.11,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-29 03:00:00"
    },
    {
      "dt": 1619676000,
      "main": {
        "temp": 282.71,
        "feels_like": 282.71,
        "temp_min": 282.71,
        "temp_max": 282.71,
        "pressure": 1007,
        "sea_level": 1007,
        "grnd_level": 945,
        "humidity": 90,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 0.55,
        "deg": 255,
        "gust": 0.98
      },
      "visibility": 10000,
      "pop": 0.17,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-29 06:00:00"
    },
    {
      "dt": 1619686800,
      "main": {
        "temp": 284.53,
        "feels_like": 283.86,
        "temp_min": 284.53,
        "temp_max": 284.53,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 945,
        "humidity": 82,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 0.72,
        "deg": 27,
        "gust": 0.79
      },
      "visibility": 10000,
      "pop": 0.2,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-29 09:00:00"
    },
    {
      "dt": 1619697600,
      "main": {
        "temp": 289.52,
        "feels_like": 288.67,
        "temp_min": 289.52,
        "temp_max": 289.52,
        "pressure": 1003,
        "sea_level": 1003,
        "grnd_level": 943,
        "humidity": 56,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 94
      },
      "wind": {
        "speed": 1.94,
        "deg": 43,
        "gust": 1.73
      },
      "visibility": 10000,
      "pop": 0.07,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-29 12:00:00"
    },
    {
      "dt": 1619708400,
      "main": {
        "temp": 288.59,
        "feels_like": 287.89,
        "temp_min": 288.59,
        "temp_max": 288.59,
        "pressure": 1002,
        "sea_level": 1002,
        "grnd_level": 942,
        "humidity": 65,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 97
      },
      "wind": {
        "speed": 3.5,
        "deg": 23,
        "gust": 3.96
      },
      "visibility": 10000,
      "pop": 0.23,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-29 15:00:00"
    },
    {
      "dt": 1619719200,
      "main": {
        "temp": 282.75,
        "feels_like": 279.68,
        "temp_min": 282.75,
        "temp_max": 282.75,
        "pressure": 1006,
        "sea_level": 1006,
        "grnd_level": 944,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10d"
        }
      ],
      "clouds": {
        "all": 98
      },
      "wind": {
        "speed": 6.65,
        "deg": 294,
        "gust": 10.71
      },
      "visibility": 2731,
      "pop": 1,
      "rain": {
        "3h": 5.31
      },
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-29 18:00:00"
    },
    {
      "dt": 1619730000,
      "main": {
        "temp": 281.45,
        "feels_like": 278.86,
        "temp_min": 281.45,
        "temp_max": 281.45,
        "pressure": 1009,
        "sea_level": 1009,
        "grnd_level": 947,
        "humidity": 95,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 501,
          "main": "Rain",
          "description": "moderate rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 4.43,
        "deg": 247,
        "gust": 10.49
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 11.23
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-29 21:00:00"
    },
    {
      "dt": 1619740800,
      "main": {
        "temp": 280.96,
        "feels_like": 278.73,
        "temp_min": 280.96,
        "temp_max": 280.96,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 948,
        "humidity": 92,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 500,
          "main": "Rain",
          "description": "light rain",
          "icon": "10n"
        }
      ],
      "clouds": {
        "all": 100
      },
      "wind": {
        "speed": 3.49,
        "deg": 249,
        "gust": 10.29
      },
      "visibility": 10000,
      "pop": 1,
      "rain": {
        "3h": 0.91
      },
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-30 00:00:00"
    },
    {
      "dt": 1619751600,
      "main": {
        "temp": 280.33,
        "feels_like": 278.75,
        "temp_min": 280.33,
        "temp_max": 280.33,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 948,
        "humidity": 93,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 803,
          "main": "Clouds",
          "description": "broken clouds",
          "icon": "04n"
        }
      ],
      "clouds": {
        "all": 82
      },
      "wind": {
        "speed": 2.35,
        "deg": 237,
        "gust": 6.73
      },
      "visibility": 10000,
      "pop": 0.08,
      "sys": {
        "pod": "n"
      },
      "dt_txt": "2021-04-30 03:00:00"
    },
    {
      "dt": 1619762400,
      "main": {
        "temp": 281.65,
        "feels_like": 280.51,
        "temp_min": 281.65,
        "temp_max": 281.65,
        "pressure": 1011,
        "sea_level": 1011,
        "grnd_level": 949,
        "humidity": 86,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 90
      },
      "wind": {
        "speed": 2.1,
        "deg": 244,
        "gust": 4.05
      },
      "visibility": 10000,
      "pop": 0.06,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-30 06:00:00"
    },
    {
      "dt": 1619773200,
      "main": {
        "temp": 286.99,
        "feels_like": 286,
        "temp_min": 286.99,
        "temp_max": 286.99,
        "pressure": 1010,
        "sea_level": 1010,
        "grnd_level": 949,
        "humidity": 60,
        "temp_kf": 0
      },
      "weather": [
        {
          "id": 804,
          "main": "Clouds",
          "description": "overcast clouds",
          "icon": "04d"
        }
      ],
      "clouds": {
        "all": 94
      },
      "wind": {
        "speed": 0.59,
        "deg": 245,
        "gust": 1.98
      },
      "visibility": 10000,
      "pop": 0,
      "sys": {
        "pod": "d"
      },
      "dt_txt": "2021-04-30 09:00:00"
    }
  ],
  "city": {
    "id": 2867714,
    "name": "Munich",
    "coord": {
      "lat": 48.1374,
      "lon": 11.5755
    },
    "country": "DE",
    "population": 1260391,
    "timezone": 7200,
    "sunrise": 1619323515,
    "sunset": 1619374664
  }
};
