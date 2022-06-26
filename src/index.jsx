import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider as AuthenticationProvider } from "./Context/Authentication.jsx";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthenticationProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthenticationProvider>
  </React.StrictMode>
);
