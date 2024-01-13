import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthContextProvider from "./Context/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "501996557175-cp36cuhv30q52upqjnpeide23oa4s7lc.apps.googleusercontent.com";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <GoogleOAuthProvider clientId={clientId}>
        <App />
      </GoogleOAuthProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
