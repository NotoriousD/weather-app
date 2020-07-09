import weatherApi from './weather_api_service';
import moment from 'moment'

weatherApi.fetchWeatherForecastByCoord().then(data => {
    console.log(data)
    let chartData = {
        labels: ['Temperature', 'Humidity', 'Wind speed', 'Atmosphere Pressure'],
        dataset:[]
    }
    for(let i = 0; i<=data.list.length-1; i = i+8){
        console.log(data.list[i].dt)
        chartData.dataset[0] = {
            label: moment(data.list[i].dt).format('MMM DD, YYYY')
        }
    }
    /* for(let j = 1; j<=chartData.labels.length; j ++){
        for(let i = 0; i <= 8; i++){
            let start = 0;
            let end = 8;
            let label = ''
            let data;
            let res = {};
            weather.list.slice(start, end).map(day=> {
                label = moment(day.dt).format('MMM DD, YYYY');
                data = data + day.main.temp;
            })
            res.label = label;
            res.data = data
            chartData.dataset.push(res)
        }
    } */
    console.log(chartData)
})

