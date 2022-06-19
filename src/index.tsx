import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import Router from "./routes/Router";
import { Provider } from "react-redux";
import { store, persistor } from "./redux";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}></PersistGate>
    <React.StrictMode>
      <Router />
    </React.StrictMode>
  </Provider>
);
