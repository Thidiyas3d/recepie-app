import React from "react";
import "./recepie.css";

function Recepie({ recepies, isLoading }) {
  if (isLoading)
    return (
      <h2 style={{ padding: "90px", color: "red", textAlign: "center" }}>
        Loading...
      </h2>
    );
  if (recepies.length === 0) {
    return (
      <h3 style={{ padding: "190px", textAlign: "center" }}>
        No results match your search... Try something different
      </h3>
    );
  }
  return (
    <>
      {recepies.map((recepie, index) => (
        <div key={index}>
          <div className="card-body">
            <h3 className="food-name">{recepie.title}</h3>
            <img
              src={`https://spoonacular.com/recipeImages/${recepie.image}`}
              className="recepie-image"
              alt="recepie"
            />
            <p>Servings :{recepie.servings} </p>
            <p>Ready in : {recepie.readyInMinutes} minutes</p>
            <button>
              <a
                href={recepie.sourceUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
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
