import { MotosEnviarMsgAnuncioPageObject } from "../pages/Forms/MotosEnviarMsgAnuncioPageObject";
import { sellerFactory } from '../model/seller';

describe("Formulário de Enviar msg ao vendedor dentro do anúncio", () => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it("Enviar msg ao vendedor", () => {
    const seller = sellerFactory.Build();
    MotosEnviarMsgAnuncioPageObject.Execute(seller);

  })
});

