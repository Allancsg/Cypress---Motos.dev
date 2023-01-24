import { MotosWhatsappAnuncioPageObject } from "../pages/Forms/MotosWhatsappAnuncioPageObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Whatsapp dentro de um anúncio", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Whatsapp", () => {
    const seller = sellerFactory.Build();
    MotosWhatsappAnuncioPageObject.Execute(seller);

  })
});

