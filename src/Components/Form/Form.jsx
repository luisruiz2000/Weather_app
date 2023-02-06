import React, { useState } from "react";

const Form = ({ showCity }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState({ empty: "", noNumbers: "" });

  const expresiones = { noNumberExpresion: /^[a-zA-ZÀ-ÿ\s]{0,40}$/ };

  const handleOnchange = (e) => {
    let value = e.target.value;

    setError({ empty: "", noNumbers: "" });

    expresiones.noNumberExpresion.test(value)
      ? setCity(value)
      : setError({ noNumbers: "Este campo solo permite letras" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) {
      setError({ empty: "Ingresa Una Ciudad" });
    } else {
      showCity(city);
      setCity("");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 d-flex justify-content-center">
          <div className="col-sm-7">
            <input
              value={city}
              type="text"
              className="form-control rounded-0"
              placeholder="Ecriba el nombre de una Ciudad"
              autoComplete="off"
              onChange={handleOnchange}
            />
          </div>
          <button className="input-group-text btn btn-primary" type="submit">
            Buscar
          </button>
        </div>
      </form>
      {error.empty ? <p className="text-danger">{error.empty}</p> : ""}
      {error.noNumbers ? <p className="text-danger">{error.noNumbers}</p> : ""}
    </div>
  );
};

export default Form;
