import React,{useEffect, useState} from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./css/Map.css";
import axios from "axios";
import PopupWeather from "./PopupWeather";

function WeatherMap(props){

    const indexOfLastCity = props.currentPage * props.citiesPerPage;
    const indexOfFirstCity = indexOfLastCity - props.citiesPerPage;
    const currentCities = props.cities.slice(indexOfFirstCity, indexOfLastCity);

    const [currentCity, setCurrentCity] = useState(""); // Contains the city whose marker is clicked
    const [data, setData] = useState({ // Contains weather information of the currentCity
        city: "",
        weather: "",
        emoji: "",
        temp: "",
        pressure: "",
        humidity: ""
    });

    const API_KEY= process.env.REACT_APP_API_KEY;
    // Url to fetch Weather API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${API_KEY}`;

    // Changes currentCity based on marker click event
    function handleClick(event, city){
      setCurrentCity(city.name)
    }

    // Updates weather data of currentCity
    useEffect(() => {
      axios.get(url)
        .then((response) => {
            setData({
                city: response.data.name,
                weather: response.data.weather[0].main,
                icon: response.data.weather[0].icon,
                temp: parseInt(response.data.main.temp) - 273,
                pressure: response.data.main.pressure+" ",
                humidity: response.data.main.humidity
            });
        }).catch((error) => {
            console.log(error);
        })
    }, [currentCity,url]);


    return (
        <div style={{height: "420px"}}>

            {/* Setting the MapContainer and its centre and zoom for optimal display of all markers */}
            <MapContainer center={[21.7679, 78.8718]} zoom={4} scrollWheelZoom={false}
             style={{height: "100%", minHeight: "100%"}} >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              {/* Places Markers for all cities in current Page */}
              {currentCities.map((city) => (
                <Marker key={city.id} position={city.position} eventHandlers={{
                  click: (e) => {
                    console.log('Marker Clicked',e)
                    handleClick(e,city);
                  },
                }} >

                  {/* Popup for current Marker */}
                  <Popup id="popup">
                    <PopupWeather key={city.id} data={data} />
                  </Popup>

                </Marker>
              ))}

            </MapContainer>
        </div>
    );
}

export default WeatherMap;