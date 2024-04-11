import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import "../css/Currencies.css";

const Currencies = () => {
  const { currency, dispatch } = useContext(AppContext);

  const changeCurrencies = (val) => {
    dispatch({
      type: "CHG_CURRENCY",
      payload: val,
    });
  };

  return (
    <div className="alert alert-secondary dropdown">
      Currencies:
      {
        <select
          name="Currencies"
          id="Currencies"
          value={currency}
          onChange={(event) => changeCurrencies(event.target.value)}
          className="dropdown-content"
        >
          <option className="dropdown-option" value="$">
            $ Dollar
          </option>
          <option className="dropdown-option" value="£">
            £ Pound
          </option>
          <option className="dropdown-option" value="₹">
            ₹ Ruppee
          </option>
          <option className="dropdown-option" value="€">
            € Euro
          </option>
          <option className="dropdown-option" value="CAD">
            CAD Canadian Dollar
          </option>
        </select>
      }
    </div>
  );
};

export default Currencies;
