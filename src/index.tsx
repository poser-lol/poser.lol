import { createRoot } from "react-dom/client";
import { App } from "./App";
import React from "react";

const container = document.getElementById("app");
if (container === null) {
  throw new Error("app element not found");
}

const root = createRoot(container);
root.render(<App />);
