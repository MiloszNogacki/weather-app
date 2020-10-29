import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "weather-icons/css/weather-icons.css"
import Weather from "./app_component/weather.component";
import Form from './app_component/form.component'

const API_key = '7495b7d572c110dfb1964ff8ad44d3ce';



class App extends React.Component{
    constructor() {
        super();
        this.state = {
            city: undefined,
            icon: undefined,
            main: undefined,
            temp: undefined,
            temp_max: undefined,
            temp_min: undefined,
            error: false
        };

this.weatherIcon = {
    Thunderstorm: "wi-thunderstorm",
    Drizzle: "wi-sleet",
    Rain: "wi-rain",
    Snow: "wi-snow-wind",
    Fog: "wi-fog",
    Clouds: "wi-clouds",
    Clear: "wi-day-haze",
    train: "wi-train"
};

    }

    calCelcius(temp){
        let cell = Math.floor(temp - 273.15);
        console.log(cell);
        return cell;
    }
get_WeatherIcon(icons, rangeID){
        switch (true) {
            case rangeID < 233:
            // case rangeID > 500:
                this.setState({icon: this.weatherIcon.Thunderstorm});
                break;
            case rangeID > 299 && rangeID < 322:
            // case rangeID > 500:
                this.setState({icon: this.weatherIcon.Drizzle});
                break;
            case rangeID > 499 && rangeID < 532:
            // case rangeID > 500:
                this.setState({icon: this.weatherIcon.Rain});
                break;
            // case rangeID > 700:
            case rangeID > 599 && rangeID < 623:
                this.setState({icon: this.weatherIcon.Snow});
                break;
            // case rangeID > 700 && rangeID < 782:
            case rangeID > 700:
                this.setState({icon: this.weatherIcon.Fog});
                break;

            default:
                this.setState({icon: this.weatherIcon.Clouds});
        }
}

    getWeather = async (e) => {

        e.preventDefault();
        const namecity = e.target.elements.city.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${namecity}&appid=${API_key}`


        );

        const response = await api_call.json();
        let res = Number.parseFloat(response.cod);
        //console.log(res === 200);

        if (res === 200) {
            this.setState({
                city: (`${response.name}`),
                temp: this.calCelcius(response.main.temp),
                temp_max: this.calCelcius(response.main.temp_max),
                temp_min: this.calCelcius(response.main.temp_min),
                description: response.weather[0].description,
                error: false,


            });

        }
        else{

            this.setState({error: true,
                temp: undefined,
                temp_max: undefined,
                temp_min: undefined,
                description: undefined,
                city: undefined,
                icon: undefined


            });
        }

        if (res === 200) {
            this.get_WeatherIcon(this.weatherIcon, response.weather[0].id)
        }
        };

    render() {
        return(
            <div className="App">
                <Form loadweather = {this.getWeather}></Form>
                <Weather city = {this.state.city}

                         temp={this.state.temp}
                         temp_max = {this.state.temp_max}
                         temp_min = {this.state.temp_min}
                         description = {this.state.description}
                          icon={this.state.icon}
                         error = {this.state.error}
                />
            </div>
        );
    }
}
export default App;