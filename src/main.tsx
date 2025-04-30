import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./Layout/Layout.tsx";
import Home from "./pages/Home.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Layout>
      <Home />
    </Layout>
  </StrictMode>
);
