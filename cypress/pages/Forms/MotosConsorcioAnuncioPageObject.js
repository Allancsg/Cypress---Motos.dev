import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { xpath } from 'cypress-xpath';
import { generate } from 'gerador-validador-cpf'
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';
import { pessoa, veiculo } from 'gerador'


export class MotosConsorcioAnuncioPageObject {

    static Execute() {
        cy.visit('https://motos.dev/motos/honda')

        cy.get(':nth-child(1) > a > .css-16azkor > .css-13qf5ug > .css-0 > .chakra-aspect-ratio > .chakra-image')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[2]/button[1]/div[1]')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[1]/div[1]/input[1]')
            .should('be.visible')
            .type(pessoa.nome())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[1]/div[2]/div[1]/input[1]')
            .should('be.visible')
            .type(faker.internet.email())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/form[1]/div[1]/div[1]/div[2]/div[2]/input[1]')
            .should('be.visible')
            .type(generatePhone());

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[2]/div[1]/form[1]/div[2]/button[1]')
            .should('be.visible')
            .click();

        cy.get('h2[class="chakra-heading css-2jpv07"]')
            .should('be.visible')
            .should('have.text', 'Resultado da simulação')


    }
}
