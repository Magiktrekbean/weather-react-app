import React, {useState} from "react";
import axios from "axios";
import "./Weather.css"
export default function Weather (){
const [data, setData] = useState({
    ready:false,
    city:"",
    temperature: null,
    description: "",
    humidity: null,
    wind: null,
    country: "",
time: null});
const [city, setCity] = useState("");
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
    console.log(response.data);
setData({
    ready:true,
    city:response.data.city,
    temperature: response.data.temperature.current,
    description: response.data.condition.description,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    country: response.data.country,
    time: response.data.time
});

} 

if (data.ready){
    function showAlert() {
    alert("Choose an area");
}
    return( <div className="Weather">
       
      <form onSubmit={handleSubmit} >
        <div className="row">
        <div className="col-9">
        <input type="search" onChange={updateCity} placeholder="search for a city..." className="form-control p-3" autoFocus="on"/>
        </div>
        <div className="col-3 d-flex justify-content-end">
        <input type="submit" value={"Search"} className="btn btn-primary w-100 "/>
      </div></div></form>
      
      <p className ="m-1"> <span>Results for</span> {data.city}, {data.country} · <a href="/" onClick={showAlert}>Choose area</a></p>
   <div className="row">
    <div className="col-3">
     <h1 className="d-flex align-items-center"> <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloud" /> {Math.round(data.temperature)}<span>°C</span></h1>
    </div>
   
        <div className="col-4 ps-4">
            <ul className="list-inline">
        
            <li>Humidity: {data.humidity}%</li>
            <li>Wind: {data.wind} km/h</li>
            </ul>
        </div>
        <div className="col-5 text-end ">
            <h2 className="d-flex justify-content-end">Weather</h2>
                  <span className="time"> <DateDisplay timestamp={data.time}/><br /> Cloudy</span>
        </div> 

    </div> <hr/>
     </div>);} else {
      const apiKey =`594b61tf99f8e42c306162ocb32f8ac6`;
    let city = "Dry Ridge";
      let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(url).then(showData);
      return "Loading";
    }
}