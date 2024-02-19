import React, { useState } from "react";
const Form = ({ count, setCount,handleSubmit }) => {
  return (
    <>
      <form onSubmit={handleSubmit} className="lorem-form">
        <label htmlFor="count" className="label">
          Paragraphs
        </label>
        <input
          type="number"
          name="count"
          id="count"
          min='1'
          step='1'
          max={8}
          value={count}
          className="input"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          Generate
        </button>
      </form>
    </>
  );
};

export default Form;
