import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-phone-input-2/lib/style.css";
import { RouterProvider } from "react-router-dom";
import Router from "./Route/Router.jsx";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Provider from "./Provider/Provider.jsx";
const queryClient = new QueryClient();
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import "swiper/css";
import "swiper/css/pagination";
import '@smastrom/react-rating/style.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={Router} />
        <div className="z-40">
          <Toaster />
        </div>
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);
