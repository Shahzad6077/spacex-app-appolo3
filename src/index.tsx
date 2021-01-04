import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppEnhancer from "./AppEnhancer";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <AppEnhancer />
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();
