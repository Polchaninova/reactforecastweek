import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Kharkiv" />
        <footer>
          This project was coded by{" "}
          <a href="https://www.shecodes.io/" target="_blank" rel="noreferrer">
            Olha Polchaninova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Polchaninova"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
