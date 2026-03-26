import { useState } from "react";
import "./from.css";  

const CITY_VALIDATION_REGEX = /^[a-zA-ZÀ-ÿ\s]{0,40}$/;

const Form = ({ showCity, showInfo }) => {
  const [city, setCity] = useState("");
  const [hasError, setHasError] = useState(false);

  const isValidCity = (value) => CITY_VALIDATION_REGEX.test(value);

  const handleOnchange = (e) => {
    const value = e.target.value;

    
    setHasError(false);

    if (isValidCity(value)) {
      setCity(value);
    } else if (value.length > 0) {
      
      setHasError(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cityTrimmed = city.trim();

    
    if (!cityTrimmed) {
      setHasError(true);
      return;
    }

    
    showCity(cityTrimmed);
    setCity("");
    setHasError(false);
  };

  const handleBlur = () => {
    
    if (!city.trim()) {
      setCity("");
      setHasError(false);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3 d-flex justify-content-center">
          <div className="col-sm-7">
            <input
              value={city}
              type="text"
              className={`form-control rounded-0 ${
                hasError ? "is-invalid" : ""
              }`}
              placeholder="Ingrese una ciudad "
              autoComplete="off"
              onChange={handleOnchange}
              onBlur={handleBlur}
            />
          </div>
          <button className="input-group-text btn btn_buscar" type="submit">
            Buscar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
