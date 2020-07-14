import { getGeolocation } from './components/geolocation';
import weatherApi from './components/weather_api_service';
import './styles.css';
import './css/page.scss';
import './components/api';

weatherApi.fetchWeatherForecastByCity().then(weather => {
  chartData(weather);
});

const chartData = data => {
  data.list.reduce((day, acc) => {
    console.log(day);
    return acc;
  }, {});
};
