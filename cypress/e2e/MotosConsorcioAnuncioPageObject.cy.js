import { MotosConsorcioAnuncioPageObject } from "../pages/Forms/MotosConsorcioAnuncioPageObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Consórcio", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Consórcio", () => {
    const seller = sellerFactory.Build();
    MotosConsorcioAnuncioPageObject.Execute(seller);

  })
});

