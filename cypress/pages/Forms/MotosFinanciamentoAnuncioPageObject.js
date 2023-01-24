import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { xpath } from 'cypress-xpath';
import { pessoa, veiculo } from 'gerador'
import { generate } from 'gerador-validador-cpf'
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';

export class MotosFinanciamentoAnuncioPageObject {

    static Execute() {
        cy.visit('https://motos.dev/motos/honda')

        cy.get(':nth-child(1) > a > .css-16azkor > .css-13qf5ug > .css-0 > .chakra-aspect-ratio > .chakra-image')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/section[1]/div[2]/div[1]/input[1]')
            .should('be.visible')
            .type(pessoa.nome())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/section[1]/div[2]/div[2]/div[1]/input[1]')
            .should('be.visible')
            .type(faker.internet.email())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/section[1]/div[2]/div[2]/div[2]/div[1]/input[1]')
            .should('be.visible')
            .type(generate());

        cy.get('div[name="birth_date"]')
            .should('be.visible')
            .type("28/04/1994")

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/section[1]/div[2]/div[3]/div[2]/input[1]')
            .should('be.visible')
            .type(generatePhone())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/section[1]/div[2]/div[4]/div[1]/label[1]/span[1]')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[1]/form[1]/section[1]/div[2]/div[5]/div[1]/button[1]')
            .should('be.visible')
            .click()

        cy.get('h2[class="chakra-heading css-13v1xzp"]')
            .should('have.text', 'No momento não conseguimos encontrar um crédito de financiamento pra você, mas liberamos a proposta de consórcio abaixo')

    }

}
