import pixabayApi from './pixabay_api_service';
import weatherApi from './weather_api_service';

pixabayApi.fetchPictures();
weatherApi.fetchCurrentWeatherByCoord();
weatherApi.fetchCurrentWeatherByCity();
weatherApi.fetchWeatherForecastByCoord();
weatherApi.fetchWeatherForecastByCity();
