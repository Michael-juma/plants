import React, { useState } from "react";

function PlantForm({ onAddPlant }) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: parseFloat(formData.price)
    };

    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPlant)
    })
      .then((res) => res.json())
      .then(onAddPlant);

    setFormData({ name: "", image: "", price: "" });
  }

  return (
    <section className="bg-success text-white py-5 mb-4">
      <div className="container text-center">
        <h1 className="display-4 fw-bold">Add a New Plant 🌱</h1>
        <p className="lead">Fill out the form below to grow your collection.</p>
        <form className="row justify-content-center mt-4" onSubmit={handleSubmit}>
          <div className="col-md-2 mb-2">
            <input
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Plant name"
              required
            />
          </div>
          <div className="col-md-3 mb-2">
            <input
              className="form-control"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="Image URL"
              required
            />
          </div>
          <div className="col-md-2 mb-2">
            <input
              className="form-control"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Price"
              type="number"
              required
            />
          </div>
          <div className="col-md-2 mb-2">
            <button type="submit" className="btn btn-light w-100">
              Add Plant
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default PlantForm;
