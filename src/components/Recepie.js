import React from "react";
import "./recepie.css";

function Recepie({ recepies }) {
  return (
    <>
      {recepies.map((recepie, index) => (
        <div key={index}>
          <div className="card-body">
            <h3 className="food-name">{recepie.title}</h3>
            {/* <img src={} className="recepie-image" alt="image"/> */}
            <p>Servings :{recepie.servings} </p>
            <p>Ready in : {recepie.readyIn}</p>
            <button>
              <a href="sdasd" target="_blank">
                View Recepie
              </a>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Recepie;
