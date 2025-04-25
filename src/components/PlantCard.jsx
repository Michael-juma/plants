import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm h-100">
        <img src={plant.image} alt={plant.name} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{plant.name}</h5>
          <p className="card-text text-muted">Price: ${plant.price}</p>
          <button
            onClick={() => setIsSoldOut(!isSoldOut)}
            className={`btn ${isSoldOut ? "btn-danger" : "btn-success"}`}
          >
            {isSoldOut ? "Sold Out" : "In Stock"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PlantCard;
