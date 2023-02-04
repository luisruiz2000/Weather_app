import React, { useState } from "react";

const Form = ({ showCity }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState({ empty: "", noNumbers: "" });

  const expresiones = { noNumberExpresion: /^[A-Za-z ]+$/g };

  const handleOnchange = (e) => {
    let value = e.target.value;

    if (value) {
      expresiones.noNumberExpresion.test(value)
        ? setCity(value)
        : setError({ noNumbers: "Este campo solo permite letras" });
    } else {
      setError({ noNumbers: "" });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city === "" || !city) {
      setError({ empty: "Ingresa Una Ciudad" });
    } else {
      showCity(city);
      setError({ empty: "", noNumbers: "" });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 d-flex justify-content-center">
          <div className="col-sm-7">
            <input
              type="text"
              className="form-control rounded-0"
              placeholder="Ciudad"
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
