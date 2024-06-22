import { useState } from "react";
import "./App.css";
import InputElement from "./components/InputElement";
import InfoElement from "./components/InfoElement";
import { monthNames, weekNames } from "./data";

const App = () => {
  const [city, setCity] = useState("");
  const [wheatherInfo, setWheatherInfo] = useState({});

  // Handles the city name changes and updates the state accordingly.
  const handleCityName = (value) => {
    setCity(value);
  };

  // This function will return the current date and year in (saturday, 22 6 2024) Format.
  const getDateAndTime = () => {
    const dateObj = new Date();
    const current_date = `${
      weekNames[dateObj.getDay()]
    }, ${dateObj.getDate()} ${
      monthNames[dateObj.getMonth()]
    } ${dateObj.getFullYear()}`;

    return current_date;
  };

  // This function converts Kelvin to {fahrenheit and celcius}
  const convertTemperature = (value) => {
    const c = value - 273.15;
    const f = c * (9 / 5) + 32;

    return {
      fahrenheit: Math.round(f),
      celcius: Math.round(c),
    };
  };

  // This function converts unix timestamp format to proper date format.
  const convertDate = (value) => {
    const tempDate = new Date(value * 1000);

    return {
      hour: tempDate.getHours(),
      minutes: tempDate.getMinutes(),
    };
  };

  const handleWheaterData = (data) => {
    // Object destructuring.
    const { city, list } = data;
    const { name, country, sunrise, sunset } = city;
    const { main, wind, weather } = list[0];
    const { temp, temp_min, temp_max, pressure, humidity } = main;
    const { speed } = wind;

    // creating a new object and assigning the current data.
    const current_data = {
      country_name: country,
      city_name: name,
      dt: getDateAndTime(),
      temp: convertTemperature(temp),
      wheather_type: weather[0].main,
      max_temp: convertTemperature(temp_max),
      min_temp: convertTemperature(temp_min),
      wind: speed.toFixed(2),
      pressure: Math.round(pressure / 33.864),
      humidity: humidity,
      sunrise: convertDate(sunrise),
      sunset: convertDate(sunset),
    };

    // Updating the state of wheatherInfo.
    setWheatherInfo(current_data);
  };

  // Once user press enter or click's on search icon. this function gets triggered.
  // This will return a promise once the API query gets resolved / rejected.
  const handleWeatherSearch = () => {
    if (city) {
      // fetch will return a promise that gets stored in getDetails.
      const getDetails = fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=ac69874b61fe58e8e825a99e1e5f6836`
      );
      getDetails
        .then((response) => {
          // the response is a promise.
          const temp_data = response.json();
          temp_data
            .then((data) => {
              handleWheaterData(data);
            })
            .catch((err) => {
              console.log(err);
              alert("Something went wrong!");
            });
        })
        .catch((error) => {
          console.log(error);
          alert("City name is Invalid!");
        });
      setCity("");
    } else {
      setWheatherInfo({});
      alert("Please enter city name.");
    }
  };

  return (
    <div id="container">
      <InputElement
        city={city}
        handleName={handleCityName}
        handleSearch={handleWeatherSearch}
      />
      <InfoElement details={wheatherInfo} />
    </div>
  );
};

export default App;
