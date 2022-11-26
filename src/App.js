import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App rounded-4">
      <div className="container pt-5">
        <Weather defaultCity="Kharkiv" />

        <footer className="p-4">
          This project was coded by{" "}
          <a
            href="https://www.shecodes.io/"
            target="_blank"
            rel="noreferrer"
            className="footer-text"
          >
            Olha Polchaninova
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Polchaninova"
            target="_blank"
            rel="noreferrer"
            className="footer-text"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
