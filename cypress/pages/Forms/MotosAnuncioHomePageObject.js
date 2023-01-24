import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { xpath } from 'cypress-xpath';
import { generate } from 'gerador-validador-cpf'
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';
import { pessoa, veiculo } from 'gerador'


export class MotosAnuncioHomePageObject {

    static Execute() {
        cy.visit('https://motos.dev')

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/button[1]')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[2]/div[1]/button[1]')
            .click()

        cy.get('input[name="name"]')
            .should('be.visible')
            .type(pessoa.nome())

        cy.get('input[name="email"]')
            .should('be.visible')
            .type(faker.internet.email())

        cy.get('input[name="search"]')
            .should('be.visible')
            .type(generatePhone())

        cy.get('.css-10klw3m > .chakra-stack > .chakra-button')
            .should('be.visible')
            .click()

        cy.get('.css-10klw3m')
            .should('be.visible')
            



    }
}
