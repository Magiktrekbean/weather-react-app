import React from "react";
import "./WeatherForecast.css";
export default function WeatherForecast(){

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