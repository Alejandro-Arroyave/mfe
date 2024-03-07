import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";

// Mount function
const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

// Two scenarios: Development or isolation call immediately
if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_dashboard-dev-root");

  if (devRoot) mount(devRoot);
}

// Through container and we should export mount
export { mount };
