import React, {useState} from "react";
import "./WeatherForecast.css";
import WeatherForecastData from "./WeatherForecastData";
import axios from "axios";

export default function WeatherForecast(props){
let [loaded, setLoaded] = useState(false);
let [forecast, setForecast] = useState(null);

    function handleResponse(response){
    setForecast(response.data.daily);
    setLoaded(true);}

   if (loaded){
    console.log(forecast);
    return (  <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast,index)
            {if(index<5){return(<div className="col-sm" key = {index}>
       <WeatherForecastData data = {dailyForecast}/>
                </div>);}
            return null;})}
            </div>
        </div>)} else {

 let lat = props.coordinates.latitude;
    let lon =props.coordinates.longitude;
    let apiKey ="594b61tf99f8e42c306162ocb32f8ac6";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`
axios.get(apiUrl).then (handleResponse);
return "Loading"}
}