import React from "react";

import {WiDaySunny, WiFog, WiRain, WiSleet, WiSnow, WiThunderstorm} from "weather-icons-react";

const Weather = (props) => {
    return(

        <div className="container">
            {iserror(props.error)}

            <div className="card_1">

                <h1>{props.city}</h1>



                {cel(props.temp)}
                {minmaxTemp(props.temp_min, props.temp_max)}
                <h4 className="py-3">{props.description}</h4>

            <i className={`wi ${props.icon} display-1`}></i>
            </div>
        </div>
    );

};




function minmaxTemp(min, max) {
    if (min && max){
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>

            </h3>
        );
    }

}

function icons(number) {

    if(number && number > 200 && number < 233){
        return (
            <WiThunderstorm size={24} color='#000' />
        )
    }
    else if(number && number > 299 && number < 323){
        return (
            <WiSleet size={24} color='#000' />
        )
    }
    else if(number && number > 499 && number < 532){
        return (
            <WiRain size={24} color='#000' />
        )
    }

    else if(number && number > 599 && number < 624){
        return (
            <WiSnow size={24} color='#000' />
        )
    }
    else if(number && number > 701 && number < 782){
        return (
            <WiSnow size={24} color='#000' />
        )
    }
    else if(number && number === 800){
        return (
            <WiFog size={24} color='#000' />
        )
    }

    else if(number && number > 800 && number < 805){
        return (
            <WiSnow size={24} color='#000' />
        )
    }

    else {
        return null;
    }

}

function cel(temp) {
    if (temp){
        return (
            <h1>

                <span className="px-4">{temp}&deg;</span>
            </h1>
        );
    }

}

function iserror(error) {
    if (error){

        return(
            <h2>
                Please enter city name
            </h2>


        )

    }

}


export default Weather;