import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBar({updateInfo}) {
    const [city, setcity] = useState("");

    const API_URL = "https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "2fb7efb963a44d89281839e5772eac80"

    let getWeatherInfo = async (city) => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            // console.log(jsonResponse);

            let result = {
                City: city,
                temp: jsonResponse.main.temp,
                Tempmax: jsonResponse.main.temp_max,
                tempmin: jsonResponse.main.temp_min,
                humidity: jsonResponse.main.humidity,
                pressure: jsonResponse.main.pressure,
                feelsLike: jsonResponse.main.feels_Like,
                Weather: jsonResponse.weather[0].description,

            }
            console.log(result);
            return result;

        } catch(error) {
            console.error("Error fetching weather data:", error);
        }
        
    }
    
    let handleChange = (event) => {
        setcity(event.target.value);
    }

    let handelSubmit = async (event) => {
        event.preventDefault();
        console.log("Data processed..");
        console.log(city);
        let newInfo = await getWeatherInfo(city);
        updateInfo(newInfo);
        setcity("");

    }

    return (
        <div className='searchBox'>
            <form onSubmit={handelSubmit}>
               <TextField 
               id="city" 
               label="City name" 
               variant="outlined"
               value={ city } 
               onChange={handleChange}
               required />

               <br></br><br></br>

                 <Button 
                 variant="contained"
                 type='submit'> Submit </Button> 

            </form>
        </div>
    )
}