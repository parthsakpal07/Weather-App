import SearchBar from "./Search.jsx";
import InfoBox from './Infobox.jsx';
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({

        City: "Mumbai",
        Tempmax: 27.89,
        Weather: "overcast cloud",
        feelsLike: undefined,
        humidity: 83,
        pressure: 1006,
        temp: 27.89,
        tempmin: 27.89,
    })

    let updateInfo = (newInfo) => {
        setweatherInfo(newInfo);
    }

    return(
        <div>
            <h2>Weather App by Parth</h2>
            <SearchBar updateInfo = { updateInfo }/> 
            <InfoBox info = { weatherInfo }/>
        </div>
    ) 
}