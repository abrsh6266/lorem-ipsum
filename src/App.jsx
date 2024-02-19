import { useState } from "react";
import Form from "./Form";

const App = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <section className="section-center">
      <h4>Tired of Lorem Ipsum</h4>
      <Form count={count} setCount={setCount} />
    </section>
  );
};
export default App;
