import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';
import { tab } from 'cypress-plugin-tab'
import { pessoa, veiculo } from 'gerador'


export class MotosWhatsappPageObject {

    static Execute() {
        cy.visit('https://motos.dev/motos/honda')

        cy.get(':nth-child(1) > a > .css-1vtysiw > .css-0 > .css-r8zlvv > span > img')
            .should('be.visible')
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

        cy.get('.css-dx2n3i')
            .invoke('removeAttr', 'target')
            .click()

        cy.intercept('POST', 'https://homolog.usadosbr.com/webservice/api/v1/proposta-motos/.../whatsapp')
            .should(() => {
                expect(200).to.equal(200)

            })
    }
}
