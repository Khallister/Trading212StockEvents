import React, { useEffect } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { Importer } from "./components/trading212Importer/Importer";
import {Exporter} from "./components/stockEventsExporter/Exporter";

function App() {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== "production" &&
      !document.getElementById("tailwind-dev")
    ) {
      const link = document.createElement("link");
      link.setAttribute(
        "href",
        "https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
      );
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("id", "tailwind-dev");
      document.head.appendChild(link);
    }
  }, []);
  return (
    <>
      <Header className="h-24"></Header>
      <main className="grid grid-cols-2">
        <Importer></Importer>
        <Exporter></Exporter>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
