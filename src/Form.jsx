import React, { useState } from "react";
import data from "./data";

const Form = ({ count, setCount }) => {
  const [text, setText] = useState(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const tex = data.slice(0, count);
    setText(tex);
  };
  return (
    <>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="count" className="label">
          Paragraphs
        </label>
        <input
          type="text"
          className="input"
          onChange={(e) => {
            setCount(e.target.value);
          }}
          id="count"
          value={count}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </>
  );
};

export default Form;
