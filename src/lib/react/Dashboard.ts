import * as React from "react";
import { createComponent } from "@lit/react";
import { VizDashboard } from "../../viz-dashboard";

export const Dashboard = createComponent({
  tagName: "viz-dashboard",
  elementClass: VizDashboard,
  react: React
})