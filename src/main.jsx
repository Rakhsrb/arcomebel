import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { configureStore } from "@reduxjs/toolkit";
import "./index.css";
import CommonReducer from "./CommonSlicer.jsx";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    common: CommonReducer,
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);