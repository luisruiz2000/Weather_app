import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Loading from "../Loading/Loading";
const apiKey = import.meta.env.VITE_APIKE;

const WeatherPanel = () => {
  useEffect(() => {
    getlocation;
  }, []);
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const getlocation = async (loc) => {
    try {
      //weather
      setLoading(true);
      let urlWeather = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}&lang=es`;
      const getWeather = await axios(urlWeather);
      const dataWeather = await getWeather.data;
      setWeather(dataWeather);

      //Forecast
      let urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${apiKey}&lang=es`;
      const getForecast = await axios(urlForecast);
      setForecast(getForecast.data);
      setLoading(false);
      setShowInfo(true);
    } catch (error) {
      console.log({ msg: "ERROR PETICION" });
      alert("Esta ciudad no existe, por favor escriba la ciudad correctamente");
      setShowInfo(false);
      setLoading(false);
    }
  };

  return (
    <>
      <Form showCity={getlocation} />
      {loading ? (
        <Loading />
      ) : (
        <Card showInfo={showInfo} weather={weather} forecast={forecast} />
      )}
    </>
  );
};

export default WeatherPanel;
