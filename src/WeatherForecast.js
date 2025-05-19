import React from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props){
    function handleResponse(response){
        console.log(props);
    }
    let city = props.city
    let apiKey ="594b61tf99f8e42c306162ocb32f8ac6";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`
axios.get(apiUrl).then (handleResponse);
    return (<div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="WeekDay">Mon</div>
                <div className="WeekDay-icon"> <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-night.png" alt="moon"/></div>
                <div className="WeekDay-temperature">
                    <span className="WeekDay-temperature-max">72°</span>
                    <span className="WeekDay-temperature-min">59°</span>
                </div>
            </div>
        </div>
    </div>)

}