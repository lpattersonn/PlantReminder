// Imports
import React, { useState } from "react";

import axios from "axios";

export default function Form(props) {
  const [form, setForm] = useState({
    img: "",
    name: "",
    waterInterval: 21600,
    lastWatered: new Date(),
  });

  // Change from state
  const handleValueChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  // Add plant
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/plant", {
        name: form.name,
        img: form.img,
        waterInterval: 21600,
        lastWatered: Date().local,
      })
      .then((res) => {
        console.log(res.data);
        props.setPlants([...props.plants, res.data]);
      });
  };

  return (
    <seciton className="form">
      <form className="form-inline" onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <label for="staticEmail2" class="sr-only">
            Image URL
          </label>
          <input
            type="text"
            name="img"
            value={form.img}
            onChange={handleValueChange}
            class="form-control"
            id="text"
            placeholder="Enter Image URL"
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <label for="inputPassword2" class="sr-only">
            Plant Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleValueChange}
            class="form-control"
            id="inputPassword2"
            placeholder="Enter Plant Name"
          />
        </div>
        <button
          type="submit"
          class="btn btn-dark mb-2"
          disabled={form.img.length < 1 || form.name.length < 1}
        >
          Add Plant
        </button>
      </form>
    </seciton>
  );
}
