import { useState, useEffect } from "react";

import pauseMobile from "./images/pattern-divider-mobile.svg";
import pauseDesktop from "./images/pattern-divider-desktop.svg";
import dice from "./images/icon-dice.svg";
import "./index.css";

function App() {
  const [text, setText] = useState([])

  const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  }

  useEffect(() => {
    fetchAdvice()
  }, [], {once: true})

  return (
    <>
      <div className="container">
        <h1>Advice #{text.id}</h1>
        <p>"{text.advice}"</p>

        <picture>
          <source media="(min-width: 768px)" srcSet={pauseDesktop} />
          <img src={pauseMobile} alt="" />
        </picture>

        <div>
          <button onClick={fetchAdvice}>
            <img src={dice} alt="" />
          </button>
        </div>
      </div>
      <div className = "attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        .&nbsp;&nbsp;Coded by <a href="https://github.com/klyde014/advice-generator-app">Kyle Rivera Lerio</a>.
      </div>
    </>
  );
}

export default App;
