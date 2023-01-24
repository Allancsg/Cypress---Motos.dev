import { MotosFaleConoscoObject } from "../pages/Forms/MotosFaleConoscoObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Fale Conosco", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Seguro", () => {
    const seller = sellerFactory.Build();
    MotosFaleConoscoObject.Execute(seller);

  })
});

