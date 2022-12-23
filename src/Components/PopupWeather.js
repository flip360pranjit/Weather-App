import React from "react";
import "./css/PopupWeather.css";

function PopupWeather(props){
    
    // Fetching the url for the weather Icon
    const imgUrl = `http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;

    
    return (
        <div className="weather-popup">
            
            <h2>{props.data.city}</h2>
            <div>
                <img src={imgUrl} alt="condition" />
                <div className="info">
                    <h4>{props.data.weather}</h4>
                    <h5>{props.data.temp}°C</h5>
                </div>
            </div>
            <h5>
                <span>Pressure</span>
                {props.data.pressure}hPa
            </h5>
            <h5>
                <span>Humidity</span>
                {props.data.humidity}%
            </h5>
        </div>
    );
}

export default PopupWeather;