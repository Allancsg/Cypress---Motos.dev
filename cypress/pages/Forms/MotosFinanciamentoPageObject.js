import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { generate } from 'gerador-validador-cpf'
import { pessoa, veiculo } from 'gerador'
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';

export class MotosFinanciamentoPageObject {

    static Execute() {
        cy.visit('https://financiamento.motos.dev/');

        cy.get('input[name="name"]')
            .should('be.visible')
            .type(pessoa.nome())

        cy.get('input[name="email"]')
            .should('be.visible')
            .type(faker.internet.email())

        cy.get('div[name="cpf"][class="chakra-form-control css-1n0enai"]')
            .should('be.visible')
            .type(generate());

        cy.get('input[id="birth_date"]')
            .should('be.visible')
            .type("28041994");

        cy.get('input[id="phone"]')
            .should('be.visible')
            .type(generatePhone());

        cy.get('#financiamento-marca-selector > .css-9fut8d-control')
            .click()

        cy.get('#react-select-financiamento-marca-selector-option-2')
            .should('be.visible')
            .click()

        cy.get('#financiamento-modelo-selector > .css-9fut8d-control')
            .should('be.visible')
            .click()
        cy.get('#react-select-financiamento-modelo-selector-option-0')
            .should('be.visible')
            .click()

        cy.get('#financiamento-ano-selector > .css-9fut8d-control')
            .should('be.visible')
            .click()
        cy.get('#react-select-financiamento-ano-selector-option-0')
            .should('be.visible')
            .click()

        cy.get('#vehicle_total_value')
            .should('be.visible')
            .type('5000000')

        cy.get('.chakra-checkbox__control')
            .should('be.visible')
            .click()

        cy.get('.css-g2kjh7 > .chakra-button')
            .should('be.visible')
            .click()

        cy.get('.chakra-heading')
            .should('have.text', 'Aguarde. Estamos buscando as melhores condições de financiamento pra você.')
        
    }
}
