export const getLoginIframe = () => {
    return getIframeBody('#new-app');
}

export const getSuccessfullMessageIframe = () => {
    return getIframeBody('iframe[name="intercom-tour-frame"]');
}

const getIframeBody = (iframeName) => {
    return cy
        .get(iframeName)
        .its('0.contentDocument').should('exist')
        .its('body').should('not.be.undefined')
        .then(cy.wrap)
}