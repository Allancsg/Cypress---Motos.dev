import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';
import { pessoa, veiculo } from 'gerador'


export class MotosConsorcioPageObject {

    static Execute() {
        cy.visit('https://motos.dev/consorcio')

        cy.get('input[name="name"]')
            .type(pessoa.nome())

        cy.get('input[name="email"]')
            .type(faker.internet.email())

        cy.get('div[name="telefone"]')
            .type(generatePhone())

        cy.get('.css-1deigkk > .chakra-button')
            .click()

        cy.wait(3000)

        cy.get('h2[class="chakra-heading css-2jpv07"]')
            .should('have.text', 'Resultado da simulação')

    }
}
