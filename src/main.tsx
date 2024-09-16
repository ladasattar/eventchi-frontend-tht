import App from "./App.tsx";
import { StrictMode } from "react";
import { Toaster } from "react-hot-toast";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { EventsProvider } from "./context/eventsContext/EventsContext.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <EventsProvider>
        <App />
        <Toaster
          toastOptions={{
            className: "toast-style",
          }}
        />
      </EventsProvider>
    </BrowserRouter>
  </StrictMode>
);
