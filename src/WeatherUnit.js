import React, { useState } from "react";
import "./WeatherUnit.css";

export default function WeatherUnit(props) {
    const [unit, setUnit] = useState("celsius");

    const showFahrenheit = (event) => {
        event.preventDefault();
        setUnit("fahrenheit");
    };

    const showCelsius = (event) => {
        event.preventDefault();
        setUnit("celsius");
    };

    return (
        <span className="WeatherUnit">
            <span className="temp">
                {Math.round(unit === "celsius" ? props.celsius : (props.celsius * (9 / 5)) + 32)}
            </span>
            <span className="unit">
                {unit === "celsius" ? (
                    <a href="/" onClick={showFahrenheit}>°C</a>
                ) : (
                    <a href="/" onClick={showCelsius}>°F</a> 
                )}
            </span>
        </span>
    );
}