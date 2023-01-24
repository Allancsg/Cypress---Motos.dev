import { MotosFinanciamentoPageObject } from "../pages/Forms/MotosFinanciamentoPageObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Financiamento dentro do anúncio", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Financiamento", () => {
    const seller = sellerFactory.Build();
    MotosFinanciamentoPageObject.Execute(seller);

  })
});

