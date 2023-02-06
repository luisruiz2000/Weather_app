import React from "react";
import "../../assets/Css/App.css";
import imgWeather from "../../assets/Img/imgWeather.jpg";
const Card = ({ showInfo, weather, forecast }) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();

  let date = `${day}/ ${month}/ ${year}`;

  const { name, main, wind } = weather;
  const { list } = forecast;

  //ICONS
  let iconWeather = "";
  let iconForecastOne = "";
  let iconForecastTwo = "";
  let iconForecastThree = "";

  //Data Forecast
  let forecastDataOne = "";
  let forecastDataTwo = "";
  let forecastDataThree = "";

  if (showInfo) {
    const urlIcon = `https://openweathermap.org/img/w/${weather.weather[0].icon}.png`;

    const urlForecast3 = `https://openweathermap.org/img/w/${forecast.list[1].weather[0].icon}.png`;
    const urlForecast6 = `https://openweathermap.org/img/w/${forecast.list[2].weather[0].icon}.png`;
    const urlForecast9 = `https://openweathermap.org/img/w/${forecast.list[3].weather[0].icon}.png`;

    iconWeather = urlIcon;
    iconForecastOne = urlForecast3;
    iconForecastTwo = urlForecast6;
    iconForecastThree = urlForecast9;

    forecastDataOne =
      list[0].dt_txt.substring(8, 10) +
      "/" +
      list[0].dt_txt.substring(5, 7) +
      "/" +
      list[0].dt_txt.substring(0, 4) +
      "/" +
      " " +
      "H" +
      " " +
      list[0].dt_txt.substring(11, 13);

    //forecast 6h
    forecastDataTwo =
      list[2].dt_txt.substring(8, 10) +
      "/" +
      list[2].dt_txt.substring(5, 7) +
      "/" +
      list[2].dt_txt.substring(0, 4) +
      "/" +
      " " +
      "H" +
      " " +
      list[2].dt_txt.substring(11, 13);

    //forecast 9h
    forecastDataThree =
      list[3].dt_txt.substring(8, 10) +
      "/" +
      list[3].dt_txt.substring(5, 7) +
      "/" +
      list[3].dt_txt.substring(0, 4) +
      "/" +
      " " +
      "H" +
      " " +
      list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-5">
      {showInfo === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0">
              <div className="col-md-4">
                <h3 className="card-title">{name}</h3>
                <p className="card-date">{date}</p>
                <h1 className="card-temp">
                  {(main.temp - 273.15).toFixed(0)}°C
                </h1>
                <p className="card-desc">
                  <img src={iconWeather} alt="Icon" />{" "}
                  {weather.weather[0].description}{" "}
                </p>
                <img
                  src={imgWeather}
                  alt="Image"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start">
                  <h5 className="card-text">
                    Temperatura Maxima: {(main.temp_max - 273.15).toFixed(0)}°C
                  </h5>
                  <h5 className="card-text">
                    Temperatura Minima: {(main.temp_min - 273.15).toFixed(0)}°C
                  </h5>
                  <h5 className="card-text">
                    Sensacion Terminica: {(main.feels_like - 273.15).toFixed(0)}
                    °C
                  </h5>
                  <h5 className="card-text">Humedad: {main.humidity}% </h5>
                  <h5 className="card-text">
                    Velicidad Del Viento: {wind.speed}m/s
                  </h5>
                </div>
                <hr />
                <div className="row mt-4">
                  <div className="col">
                    <p>{forecastDataOne}:00</p>
                    <p className="description">
                      <img src={iconForecastOne} alt="icon" />
                      {list[1].weather[0].description}
                    </p>
                    <p className="temp">
                      {(list[1].main.temp - 273.15).toFixed(0)}°C
                    </p>
                  </div>
                  <div className="col">
                    <p>{forecastDataTwo}:00</p>
                    <p className="description">
                      <img src={iconForecastTwo} alt="icon" />
                      {list[2].weather[0].description}
                    </p>
                    <p className="temp">
                      {(list[2].main.temp - 273.15).toFixed(0)}°C
                    </p>
                  </div>
                  <div className="col">
                    <p>{forecastDataThree}:00</p>
                    <p className="description">
                      <img src={iconForecastThree} alt="icon" />
                      {list[3].weather[0].description}
                    </p>
                    <p className="temp">
                      {(list[3].main.temp - 273.15).toFixed(0)}°C
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        false
      )}
    </div>
  );
};

export default Card;
