import "reflect-metadata";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "just-vm";
import { store, store2 } from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <div>
      <Provider value={store}>
        <App />
      </Provider>
      <Provider value={store2}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);
