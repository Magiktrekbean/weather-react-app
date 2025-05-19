import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
import WeatherForecast from "./WeatherForecast";

import WeatherUnit from "./WeatherUnit.js"
export default function Weather (props){
const [data, setData] = useState({
    ready:false,
    city:"",
    temperature: null,
    description: "",
    humidity: null,
    wind: null,
    country: "",
time: null,
icon:"",
iconUrl: null,
});
const [city, setCity] = useState(props.defaultCity);
const apiKey =`594b61tf99f8e42c306162ocb32f8ac6`;
function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showData);
  }
   function formatDate(date) {
      const options = {
          hour: "numeric",
          minute: "numeric",
      };
      return date.toLocaleString(undefined, options);
  }
  
  function formatDay(timestamp) {
      let date = new Date(timestamp * 1000);
      const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      return days[date.getDay()];
  }
  
  const DateDisplay = ({ timestamp }) => {
      const date = new Date(timestamp * 1000);
      return (
        <span >{formatDay(timestamp)} {formatDate(date)}</span>
      );
  };
function updateCity(event) {
    setCity(event.target.value);
  }
function showData(response){

setData({
    ready:true,
    city:response.data.city,
    temperature: response.data.temperature.current,
    description: response.data.condition.description,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    country: response.data.country,
    time: response.data.time,
    iconUrl:response.data.condition.icon_url,
    icon: response.data.condition.icon,
    coordinates: response.data.coordinates,

});

} 

if (data.ready){
    function showAlert() {
    alert("Choose an area");
}
    return( <div className="Weather">
      <div className="container">
       <div className="p-3 d-block">
      <form  onSubmit={handleSubmit} >
        <div className="row">
        <div className="col-sm-9 input">
        <input type="search" onChange={updateCity} placeholder="search for a city..." className="form-control p-3" autoFocus="on"/>
        </div>
        <div className="col-sm-3 input d-flex justify-content-end">
        <input type="submit" value={"Search"} className="btn btn-primary w-100 "/>
      </div></div></form>
      
      <p > <span>Results for</span> {data.city}, {data.country} · <a href="/" onClick={showAlert}>Choose area</a></p>
  
  
   <div className="row adjusted ">
    <span className=" d-block d-sm-none "><div className="text-capitalize mb-3 title fw-bold ">Weather</div><span className="time"><DateDisplay  timestamp={data.time}/></span> </span>
     
       <div className="col-sm d-flex align-items-start ">
        <div className="col-3"><h1 className="d-flex align-items-center "> <img src={data.iconUrl} alt={data.icon}/> <WeatherUnit celsius= {data.temperature} /></h1></div> 
       <div className="col-3">

            <ul className="list-inline  ps-0 text-start">
            <li className="d-block d-sm-none text-capitalize description fw-bold"> {data.description}</li>
            <li className="">Humidity: {data.humidity}%</li>
            <li className="">Wind: {data.wind} km/h</li>
            </ul>   
        </div>
      
        
        <div className="col-sm small">
            <h2 className="">Weather</h2>
                  <span className="time  "> <DateDisplay timestamp={data.time}/><div className="text-capitalize">{data.description}</div></span>
        </div>   
    </div> </div></div>

<WeatherForecast coordinates ={data.coordinates}/>
 <hr/>
   
     </div></div>);} else {
      const apiKey =`594b61tf99f8e42c306162ocb32f8ac6`;
  
      let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showData);
      return "Loading";
    }
}