/*************************************** Context API ***************************/
/*
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AppContextProvider } from "./Pages/contextAPI/context/AppContext";

createRoot(document.getElementById("root")).render(
  <AppContextProvider>
    <App />
  </AppContextProvider>
);

*/

/****************************************** Redux ******************************/
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./Pages/redux/Store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
