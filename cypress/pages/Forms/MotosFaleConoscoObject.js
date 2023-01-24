import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { xpath } from 'cypress-xpath';
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';
import { pessoa, veiculo } from 'gerador'


export class MotosFaleConoscoObject {

    static Execute() {
        cy.visit('https://motos.dev/fale-conosco')

        cy.get('input[name="nome"]')
            .should('be.visible')
            .clear()
            .type(pessoa.nome())

        cy.get('input[name="email"]')
            .should('be.visible')
            .clear()
            .type(faker.internet.email())

        cy.get('div[name="telefone"]')
            .should('be.visible')
            .clear()
            .type(generatePhone());

        cy.get('input[name="cidade"]')
            .should('be.visible')
            .clear()
            .type("Osasco");

        cy.get('label[for=":R2kl6il55sm:"][id="field-:Rmkl6il55sm:-label"]')
            .should('be.visible')
            .type('SP')

        cy.get('.css-ckyhk3 > .chakra-button')
            .should('be.visible')
            .click()

        cy.wait(5000)

        cy.get('.css-1fgckmf')
            .should('have.text', 'Informações enviadas com sucesso.')



    }
}
