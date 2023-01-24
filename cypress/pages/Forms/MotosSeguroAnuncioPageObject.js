import { faker } from '@faker-js/faker';
import { xpath } from 'cypress-xpath';
import { generate } from 'gerador-validador-cpf'
faker.locale = 'pt_BR'
import { generatePhone, generateCep } from '../../utils/SellerData/generateBrazillianData';
import { pessoa, veiculo } from 'gerador'


export class MotosSeguroAnuncioPageObject {

    static Execute() {
        cy.visit('https://motos.dev/motos/honda')

        cy.get(':nth-child(1) > a > .css-16azkor > .css-13qf5ug > .css-0 > .chakra-aspect-ratio > .chakra-image')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/div[3]/button[1]/div[1]')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[2]/div[1]/input[1]')
            .should('be.visible')
            .type(pessoa.nome())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/div[1]/input[1]')
            .should('be.visible')
            .type(generate())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[4]/div[1]/input[1]')
            .should('be.visible')
            .type(faker.internet.email())

        cy.get('div[name="cellphone"][class="chakra-form-control css-1n0enai"]')
            .should('be.visible')
            .type(generatePhone())

        cy.get('div[name="birthday"][class="chakra-form-control css-1n0enai"]')
            .should('be.visible')
            .type('28/04/1994')

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[7]/div[1]/div[1]/div[1]/div[1]/div[1]')
            .should('be.visible')
            .click()
            .type('{pageDown}')
            .type('{enter}')

        cy.get('.css-1a7kxar > .chakra-button')
            .should('be.visible')
            .click()

        cy.get('div[name="cep"]')
            .should('be.visible')
            .type(generateCep())
        ''
        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[4]/div[2]')
            .should('be.visible')
            .click()

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/div[1]/div[3]/div[1]/div[2]/div[3]/div[1]/div[1]/div[1]/form[1]/div[1]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]')
            .click()
            .type('{pageUp}')
            .type('{enter}')

        cy.get('div[name="plate"][class="chakra-form-control css-1n0enai"]')
            .should('be.visible')
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
