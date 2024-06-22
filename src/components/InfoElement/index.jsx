import "./index.css";

const InfoElement = (props) => {
  // Object destructuring and renaming inside of it.
  const { details: info } = props;

  return (
    <div id="info-container">
      <div className="location">
        <div className="city">
          {info.city_name
            ? `${info.city_name}, ${info.country_name}`
            : "-------, --"}
        </div>
        <div className="date">{info.dt ? info.dt : "------, -- ---- ----"}</div>
      </div>
      <div className="current">
        <div className="temp">
          {info.temp ? info.temp.fahrenheit : "--"} <span>°</span>
        </div>
        <div className="weather">
          {info.wheather_type ? info.wheather_type : "-----"}
        </div>
      </div>
      <div className="extras">
        <div className="min-max-temp">
          <div className="max">
            <h3>Max temp</h3>
            <h4 className="max-num">
              {info.max_temp ? `${info.max_temp.fahrenheit}°` : "--°"}
            </h4>
          </div>
          <div className="min">
            <h3>Min temp</h3>
            <h4 className="min-num">
              {info.min_temp ? `${info.min_temp.fahrenheit}°` : "--°"}
            </h4>
          </div>
        </div>
        <div className="wind-pressure-humidity">
          <div className="wind">
            <h3>Wind</h3>
            <h4 className="wind-speed">{info.wind ? info.wind : "--"}</h4>
          </div>
          <div className="pressure">
            <h3>Pressure</h3>
            <h4 className="pressure-rate">
              {info.pressure ? info.pressure : "--"}
            </h4>
          </div>
          <div className="humidity">
            <h3>Humidity</h3>
            <h4 className="humidity-level">
              {info.humidity ? info.humidity : "--"}
            </h4>
          </div>
        </div>
        <div className="sunrise-sunset ">
          <div className="sunrise">
            <h3>Sunrise</h3>
            <h4 className="sunrise-time">
              {info.sunrise
                ? `${info.sunrise.hour} : ${info.sunrise.minutes} AM`
                : "--:--"}
            </h4>
          </div>
          <div className="sunset">
            <h3>Sunset</h3>
            <h4 className="sunset-time">
              {info.sunset
                ? `${info.sunset.hour} : ${info.sunset.minutes} PM`
                : "--:--"}
            </h4>
          </div>
        </div>
        <div className="weekly-forecast"></div>
      </div>
    </div>
  );
};

export default InfoElement;
