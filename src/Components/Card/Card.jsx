import React from "react";
import imgWeather from "../../assets/Img/imgWeather.jpg";
import "./card.css";
const Card = ({ showInfo, weather, forecast }) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth();
  let year = today.getFullYear();

  
  const diasSemana = [
    "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
  ];
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"
  ];

  
  let date = `Hoy, ${day} de ${meses[month]} de ${year}`;

  const { name, main, wind } = weather;
  const { list } = forecast;

  const formatForecastDate = (dt_txt) => {
    const dateObj = new Date(dt_txt);
    const today = new Date();

    const dia = dateObj.getDate();

    const diaHoy = today.getDate();

    let horas = dateObj.getHours();
    const minutos = String(dateObj.getMinutes()).padStart(2, "0");
    const ampm = horas >= 12 ? "PM" : "AM";
    horas = horas % 12;
    horas = horas ? horas : 12;

    
    if (dia === diaHoy) {
      return `Hoy a las ${horas}:${minutos} ${ampm}`;
    }

    
    const diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const diaSemana = diasSemana[dateObj.getDay()];

    return `${diaSemana} a las ${horas}:${minutos} ${ampm}`;
  };

  let iconWeather = "";
  let iconForecastOne = "";
  let iconForecastTwo = "";
  let iconForecastThree = "";

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

    forecastDataOne = formatForecastDate(list[0].dt_txt);
    forecastDataTwo = formatForecastDate(list[2].dt_txt);
    forecastDataThree = formatForecastDate(list[3].dt_txt);
  }

  return (
    <div className="card_info">
      {showInfo === true ? (
        <div className="card_content">
          <div className="climate_city">
            <div className="climate_city_result ">
              <div className="glass">
                <h3>{name}</h3>
                <p>{date}</p>
              </div>
              <div>
                <p className="glass d-flex justify-content-between align-items-center">
                 <div> <img src={iconWeather} alt="Icon" />{" "}
                  {weather.weather[0].description}{" "}</div>
                <h1>{(main.temp - 273.15).toFixed(0)}°C</h1>
                </p>
              </div>
            </div>
          </div>

          {/* forecast */}
          <div className="card_more_info">
            <div>
              <h3>Mas informacion</h3>
              <p><i className="bi bi-thermometer-high"></i> Temperatura Maxima: {(main.temp_max - 273.15).toFixed(0)}°C</p>
              <p><i className="bi bi-thermometer-low"></i> Temperatura Minima: {(main.temp_min - 273.15).toFixed(0)}°C</p>
              <p><i className="bi bi-thermometer-half"></i> Sensacion Térmica: {(main.feels_like - 273.15).toFixed(0)}°C</p>
              <p><i className="bi bi-droplet"></i> Humedad: {main.humidity}% </p>
              <p><i className="bi bi-wind"></i> Velicidad Del Viento: {wind.speed}m/s</p>
            </div>
            <hr />
            <div className="forecast">
              <div className="forecast_card">
                <p>{forecastDataOne}</p>
                <p>
                  <img src={iconForecastOne} alt="icon" />
                  {list[1].weather[0].description}
                </p>
                <p>{(list[1].main.temp - 273.15).toFixed(0)}°C</p>
              </div>
              <div className="forecast_card">
                <p>{forecastDataTwo}</p>
                <p>
                  <img src={iconForecastTwo} alt="icon" />
                  {list[2].weather[0].description}
                </p>
                <p>{(list[2].main.temp - 273.15).toFixed(0)}°C</p>
              </div>
              <div className="forecast_card">
                <p>{forecastDataThree}</p>
                <p>
                  <img src={iconForecastThree} alt="icon" />
                  {list[3].weather[0].description}
                </p>
                <p>{(list[3].main.temp - 273.15).toFixed(0)}°C</p>
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
