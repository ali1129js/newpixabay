/**
 * @Author: Ali
 * @Date:   2018-04-28T14:51:10+02:00
 * @Last modified by:   Ali
 * @Last modified time: 2019-01-07T12:53:58+01:00
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
