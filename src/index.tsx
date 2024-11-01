/* @refresh reload */
import { render } from "solid-js/web";
import { Route, Router } from "@solidjs/router";
import "./index.css";
import Layout from "./App";
import { lazy } from "solid-js";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}
import Homepage from "./pages/homepage";
import Bestsellers from "./pages/bestsellers";
import ProductOverview from "./pages/productoverview";

render(
  () => (
    <Router base={import.meta.env.BASE_URL} root={Layout}>
      <Route path="/" component={Homepage} />
      <Route path="/bestsellers/:category" component={Bestsellers} />
      <Route
        path="/product/:productName/:productId"
        component={ProductOverview}
      />
    </Router>
  ),
  root!
);
