import { schema } from "../schemas/dummy";

//Lib para validação de dados JSON
const chai = require("chai");
const chaiJsonSchemaAjv = require("chai-json-schema-ajv");
chai.use(chaiJsonSchemaAjv);
const { expect } = chai;

Cypress.Commands.add("dummyGET", () => {
  cy.request({
    method: "GET",
    url: `${Cypress.env('API_URL_GET')}`,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  }).then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body).to.be.jsonSchema(schema);
    if ((response.body = !schema)) {
      cy.log("Dados da response não correspondem ao contrato.");
    } else {
      cy.log("Dados da response conforme o contrato passado. ");
    }
  });
});