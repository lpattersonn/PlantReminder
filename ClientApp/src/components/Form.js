import React from "react";

export default function Form() {
  return (
<seciton className="form">
    <form className="form-inline">
      <div className="form-group mb-2">
        <label for="staticEmail2" class="sr-only">
          Email
        </label>
        <input
          type="text"
          readonly
          class="form-control"
          id="text"
          placeholder="Image Adress"
          value=""
        />
      </div>
      <div className="form-group mx-sm-3 mb-2">
        <label for="inputPassword2" class="sr-only">
          Password
        </label>
        <input
          type="password"
          class="form-control"
          id="inputPassword2"
          placeholder="Password"
        />
      </div>
      <button type="submit" class="btn btn-dark mb-2">
        Add Plant
      </button>
    </form>
    </seciton>
  );
}
