import { faker } from '@faker-js/faker';
faker.locale = 'pt_BR'
import { xpath } from 'cypress-xpath';
import { pessoa, veiculo } from 'gerador'
import { generatePhone } from '../../utils/SellerData/generateBrazillianData';

export class MotosWhatsappAnuncioPageObject {

    static Execute() {

        cy.visit('https://motos.dev/motos/honda')

        cy.get(':nth-child(1) > a > .css-16azkor > .css-13qf5ug > .css-0 > .chakra-aspect-ratio > .chakra-image')
            .should('be.visible')
            .click()

        cy.scrollTo('bottom')

        cy.get('.tsG0HQh7bcmTha7pyanx-btn-close')
            .should('be.visible')
            .click()

        cy.get('.bGGcZJZR7IsEsQjTbspD-html-close-button')
            .should('be.visible')
            .click()

        cy.get('.css-1fh6fqw > .chakra-text')
            .should('be.visible')
            .click()

        cy.get('input[name="name"][maxlength="80"]')
            .should('be.visible')
            .type(pessoa.nome())


        cy.get('input[name="email"][maxlength="80"]')
            .should('be.visible')
            .type(faker.internet.email())

        cy.get('input[id=":ri:"]')
            .should('be.visible')
            .type(generatePhone())

        cy.get('.css-dx2n3i')
            .should('be.visible')
            .click()

        cy.intercept('POST', 'https://homolog.usadosbr.com/webservice/api/v1/proposta-motos/.../whatsapp')
            .should(() => {
                expect(200).to.equal(200)

            })

    }
}
