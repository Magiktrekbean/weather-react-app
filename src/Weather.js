import React from "react";
import "./Weather.css"
export default function Weather (){
    return( <div className="Weather">
      <form  >
        <div className="row">
        <div className="col-9">
        <input type="search"  placeholder="search for a city..." className="form-control p-3" autoFocus="on"/>
        </div>
        <div className="col-3 d-flex justify-content-end">
        <input type="submit" value={"Search"} className="btn btn-primary w-100 "/>
      </div></div></form>
      
      <p1 className ="m-1"> <span>Results for</span> Lexington, KY · <a href="/" target="blank">Choose area</a></p1>
   <div className="row">
    <div className="col-3">
     <h1 className="d-flex align-items-center"> <img src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png" alt="cloud" /> 21<span>°C</span></h1>
    </div>
   
        <div className="col-4 ps-4">
            <ul className="list-inline">
            <li>Precipitation: 0%</li>
            <li>Humidity: 47%</li>
            <li>Wind: 13 km/h</li>
            </ul>
        </div>
        <div className="col-5 ">
            <h2 className="d-flex justify-content-end">Weather</h2>
                  <p2 className="d-flex justify-content-end text-end">Sunday 11:00PM <br /> Cloudy</p2>
        </div> 

    </div> <hr/>
     </div>)
}