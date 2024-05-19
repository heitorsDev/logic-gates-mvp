import React from "react";
import "./Led.css";
import ledLigado from './img/conectorligado.png';
import ledDesligado from './img/conectordesligad.png';

const Led = ({ light, id }) => {
  return (
    <div
      id={id}

    >
      {light ? (
        <img src={ledLigado} alt="LED Ligado" className="light-on" />
      ) : (
        <img src={ledDesligado} alt="LED Desligado" className="light-off" />
      )}
    </div>
  );
};

export default Led;
