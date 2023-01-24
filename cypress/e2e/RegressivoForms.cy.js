import { MotosConsorcioPageObject } from "../pages/Forms/MotosConsorcioPageObject";
import { MotosFinanciamentoPageObject } from "../pages/Forms/MotosFinanciamentoPageObject";
import { MotosvalieSeuVeiculoPageObject } from "../pages/Forms/MotosvalieSeuVeiculoPageObject";
import { MotosSeguroPageObject } from "../pages/Forms/MotosSeguroPageObject";
import { MotosFaleConoscoObject } from "../pages/Forms/MotosFaleConoscoObject";
import { MotosWhatsappPageObject } from "../pages/Forms/MotosWhatsappPageObject";
import { MotosWhatsappAnuncioPageObject } from "../pages/Forms/MotosWhatsappAnuncioPageObject";
import { MotosFinanciamentoAnuncioPageObject } from "../pages/Forms/MotosFinanciamentoAnuncioPageObject";
import { MotosConsorcioAnuncioPageObject } from "../pages/Forms/MotosConsorcioAnuncioPageObject";
import { MotosSeguroAnuncioPageObject } from "../pages/Forms/MotosSeguroAnuncioPageObject";
import { MotosEnviarMsgAnuncioPageObject } from "../pages/Forms/MotosEnviarMsgAnuncioPageObject";

import { sellerFactory } from '../model/seller';



describe("Regressivo forms", () => {

    it("Regressivo Forms", () => {

        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        const seller = sellerFactory.Build();
        MotosConsorcioPageObject.Execute(seller);
        MotosFinanciamentoPageObject.Execute(seller);
        MotosvalieSeuVeiculoPageObject.Execute(seller); 
        MotosSeguroPageObject.Execute(seller);
        MotosFaleConoscoObject.Execute();
        MotosWhatsappPageObject.Execute();
        MotosWhatsappAnuncioPageObject.Execute();
        MotosFinanciamentoAnuncioPageObject.Execute();
        MotosConsorcioAnuncioPageObject.Execute();
        MotosSeguroAnuncioPageObject.Execute();
        MotosEnviarMsgAnuncioPageObject.Execute();

    })
});

