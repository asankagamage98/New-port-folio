import React from "react";
import ReactDOM  from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./src/App";

// ReactDOM.createRoot(document.getElementById('app')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )

ReactDOM.render(
  <BrowserRouter>
      <App />
  </BrowserRouter>,
   document.getElementById("app")
);