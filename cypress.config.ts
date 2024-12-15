import resetDB from "@/cypress/tasks/resetDB";
import seedDB from "@/cypress/tasks/seedDB";
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        resetDB,
        seedDB,
      });
    },
    baseUrl: "http://localhost:3000/dashboard/overview",
    specPattern: ["cypress/e2e", "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}"],
  },
});
