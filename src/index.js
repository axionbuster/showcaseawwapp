import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

// See process.env object. An entry in the .env file like HOME=/usr/bin becomes
// an entry in the object like { "HOME": "/usr/bin" }.
//
// https://www.npmjs.com/package/dotenv
//
// Ignore the .env file on Git.

const Index = () => {
  return <App />;
};

ReactDOM.render(<Index />, document.getElementById("root"));
