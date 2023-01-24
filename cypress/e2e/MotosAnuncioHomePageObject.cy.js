import { MotosAnuncioHomePageObject } from "../pages/Forms/MotosAnuncioHomePageObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Whatsapp", () => {
    Cypress.on('uncaught:exception', (err, runnable) => {
        return false;
      });

    it("Whatsapp", () => {
    const seller = sellerFactory.Build();
    MotosAnuncioHomePageObject.Execute(seller);
                     
    })
});

