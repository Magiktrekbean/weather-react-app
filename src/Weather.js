import React from "react";
import "./Weather.css"
export default function Weather (){
    return( <div className="Weather">
      <form >
        <div className="row">
        <div className="col-9">
        <input type="search" placeholder="search for a city..." className="form-control p-3"/>
        </div>
        <div className="col-3 d-flex justify-content-end">
        <input type="submit" value={"Search"} className="btn btn-primary ps-5 pe-5 "/>
      </div></div></form>
      
      <p className="m-2">Results for Lexington, KY <a href="/">choose area</a></p>
   <div className="row">
    <div className="col-3">
       <h1> <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"/> 21°C</h1>
    </div>
   
        <div className="col-3">
            <ul className="list-inline">
            <li>Precipitation: 0%</li>
            <li>Humidity: 47%</li>
            <li>Wind: 13 km/h</li>
            </ul>
        </div>
        <div className="col-6 ">
            <h2 className="d-flex justify-content-end">Weather</h2>
                  <p className="d-flex justify-content-end text-end">Sunday 11:00PM <br /> Cloudy</p>
        </div> 

    </div> <hr/>
     </div>)
}