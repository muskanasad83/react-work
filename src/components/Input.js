import React, { useState } from "react";

export default function Input(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="exampleFormControlTextarea1"
          rows="10"
        ></textarea>
      </div>
      <div className="container my-3">
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
