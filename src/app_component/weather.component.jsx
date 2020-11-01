import React from "react";

import {WiDaySunny, WiFog, WiRain, WiSleet, WiSnow, WiThunderstorm} from "weather-icons-react";


const Weather = (props) => {
    return(

        <div className="container">
            {iserror(props.error)}

            <div className="div">

                <h1>{props.city}</h1>



                {cel(props.temp)}
                {minmaxTemp(props.temp_min, props.temp_max)}



            <i className={`wi ${props.icon} display-1`}> </i>

                <h4>
                    {props.description}
                </h4>

                {arrow(props.wind_deg)}


                {speed(props.wind_speed)}


            </div>



            </div>




    );

};

function speed (num) {
    if (num){
    return(
        <h5>{num} m/s</h5>
    )
}}

function arrow (deg){

    // let x = Number.parseFloat(deg);

    if(deg){

        return(

            <div style={{rotate: deg + "deg"}} className="long-arrow-right"> </div>



        )
    }
}


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