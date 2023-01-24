import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { xpath } from 'cypress-xpath';
import { generate } from 'gerador-validador-cpf'
import { generatePhone, generateCep } from '../../utils/SellerData/generateBrazillianData';
import { pessoa, veiculo } from 'gerador'

export class MotosEnviarMsgAnuncioPageObject {

    static Execute() {
        cy.visit('https://motos.dev/motos/honda')

        cy.get(':nth-child(1) > a > .css-16azkor > .css-13qf5ug > .css-0 > .chakra-aspect-ratio > .chakra-image')
            .should('be.visible')
            .click()

        cy.get('input[name="nome"]')
            .should('be.visible')
            .type(pessoa.nome())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/section[1]/div[1]/div[1]/form[1]/div[2]/input[1]')
            .should('be.visible')
            .type(faker.internet.email())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/section[1]/div[1]/div[1]/form[1]/div[3]/input[1]')
            .should('be.visible')
            .type(generatePhone())

        cy.xpath('//body[1]/div[1]/div[1]/div[2]/div[1]/div[2]/div[2]/section[1]/div[1]/div[1]/form[1]/button[1]')
            .should('be.visible')
            .click()

        cy.get('div[class="css-rss41i"]')
            .should('have.text', 'Informações enviadas com sucesso.')


    }
}
