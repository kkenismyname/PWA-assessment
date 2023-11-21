import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "./lib/router";
import { Index } from "./routes/Index";
import { Product } from "./routes/Product";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router
      routes={[
        {
          path: /^\/$/,
          component: Index,
        },
        {
          path: /^\/(?<id>\d+)+$/,
          component: Product,
        },
      ]}
      NotFound={() => <div>Not found</div>}
    />
  </React.StrictMode>,
);
