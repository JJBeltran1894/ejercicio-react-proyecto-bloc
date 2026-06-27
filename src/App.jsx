import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ListaNoticias from "./components/ListaNoticias";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <ListaNoticias />
      </main>
    </div>
  );
}

export default App;
