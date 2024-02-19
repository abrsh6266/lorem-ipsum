import { useState } from "react";
import data from "./data";
import Form from "./Form";

const App = () => {
  const [text, setText] = useState([]);
  const [count, setCount] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();
    const tex = data.slice(0, count);
    setText(tex);
  };
  console.log(count);
  return (
    <section className="section-center">
      <h4>Tired of Lorem Ipsum</h4>
      <Form count={count} setCount={setCount} handleSubmit={handleSubmit} />
      <div className="lorem-text">
        {text != [] &&
          text.map((t, i) => {
            return <p key={i}>{t}</p>;
          })}
      </div>
    </section>
  );
};
export default App;
