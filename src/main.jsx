import { Provider } from "./components/ui/provider";
import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <Router />
    </Provider>
  </React.StrictMode>
);
