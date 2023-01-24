import { MotosSeguroPageObject } from "../pages/Forms/MotosSeguroPageObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Seguro", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Seguro", () => {
    const seller = sellerFactory.Build();
    MotosSeguroPageObject.Execute(seller);

  })
});

