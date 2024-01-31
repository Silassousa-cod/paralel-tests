import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'https://demo.opencart.com/',
    setupNodeEvents(on, config) {
    },
  },
  env: {
    "API_URL_GET": "https://dummy.restapiexample.com/api/v1/employees/",
    "API_URL_POST": "https://dummy.restapiexample.com/api/v1/create",
}, 
projectId: "ypptiq"
});
