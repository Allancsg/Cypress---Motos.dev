import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { xpath } from 'cypress-xpath';
import { generate } from 'gerador-validador-cpf'
import { generatePhone, generateCep } from '../../utils/SellerData/generateBrazillianData';
import { pessoa, veiculo } from 'gerador'


export class MotosSeguroPageObject {

    static Execute() {
        cy.visit('https://motos.dev/seguro')

        cy.get('input[name="name"]')
            .should('be.visible')
            .clear()
            .type(pessoa.nome())

        cy.get('div[name="cpf"][class="chakra-form-control css-1n0enai"]')
            .should('be.visible')
            .clear()
            .type(generate());

        cy.get('input[name="email"]')
            .should('be.visible')
            .clear()
            .type(faker.internet.email())

        cy.get('div[name="cellphone"]')
            .should('be.visible')
            .clear()
            .type(generatePhone());

        cy.get('div[name="birthday"]')
            .should('be.visible')
            .clear()
            .type('28/04/1994');

        cy.get('.css-10rxr3v > .css-10liwa2 > .chakra-form-control > .css-b62m3t-container > .css-15xe11q-control > .css-1wy0on6 > .css-tlfecz-indicatorContainer > .css-8mmkcg')
            .click()
            .type('{pageUp}')
            .type('{enter}')

        cy.get('.css-1a7kxar > .chakra-button')
            .should('be.visible')
            .click()

        cy.get('div[name="cep"]')
            .should('be.visible')
            .clear()
            .type(generateCep());

        cy.get('.css-1a7kxar > .chakra-button')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/div[1]/form[1]/div[1]/div[4]/div[2]/div[1]/div[1]/div[1]/div[1]')
            .click()
            .type('{pageUp}')
            .type('{enter}')

        cy.get('div[name="plate"]')
            .should('be.visible')
            .clear()
            .type('FBI-1391');

        cy.get(':nth-child(3) > .chakra-checkbox > .chakra-checkbox__control')
            .should('be.visible')
            .click()

        cy.get('.css-1a7kxar > .chakra-button')
            .click()
            .click()

        cy.get('.css-1ql6edl')
            .should('be.visible')







    }
}
