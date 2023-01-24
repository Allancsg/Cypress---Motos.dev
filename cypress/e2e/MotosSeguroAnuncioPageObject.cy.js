import { MotosSeguroAnuncioPageObject } from "../pages/Forms/MotosSeguroAnuncioPageObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Consórcio", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Consórcio", () => {
    const seller = sellerFactory.Build();
    MotosSeguroAnuncioPageObject.Execute(seller);

  })
});

