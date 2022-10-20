import { createServer } from "miragejs";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: "1",
          amount: "300",
          category: "job",
          title: "Transactions 1",
          type: "deposit",
        },
      ];
    });
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
