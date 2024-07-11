import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider } from "react-router";
import mainRoutes from "./routes/main.routes";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <RouterProvider router={mainRoutes} />
            </Provider>
        </HelmetProvider>
    </React.StrictMode>
);
