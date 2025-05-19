import React from "react";
export default function WeatherForecastData(props){
function day (){
    let date = new Date(props.data.time*1000);
    let day = date.getDay();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    return days[day];
}
function maxTemp (){
    let temp = Math.round(props.data.temperature.maximum);
    return`${temp}°`
}
function minTemp (){
    let temp = Math.round(props.data.temperature.minimum);
    return`${temp}°`
}
return(<div className="WeatherForecastData ">
                <div className="WeekDay">{day()}</div>
                <div className="WeekDay-icon"> <img src={props.data.condition.icon_url} alt={props.data.condition.icon}  /></div>
                <div className="WeekDay-temperature">
                    <span className="WeekDay-temperature-max">{maxTemp()}</span>
                    <span className="WeekDay-temperature-min">{minTemp()}</span>
              </div> </div> )
           
}