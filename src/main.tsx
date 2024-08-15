import { StrictMode } from "react";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";

import "@app/assets/styles/styles.scss";

import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProvider from "@app/services/Provider/AuthProvider.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>  
      </BrowserRouter>
    </AuthProvider>
  </StrictMode>
);
