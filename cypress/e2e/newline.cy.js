import json from '../fixtures/keystore.json'
describe('typing', () => {
  it('types with newline characters omitted', () => {
    cy.visit('cypress/fixtures/dom.html')
    cy.get('#input').type(json.privatekey)
  })

  it('replaces newline characters with enter for same effect', () => {
    const privateKeyWithEnter = json.privatekey.replaceAll("\n", '{enter}')
    cy.visit('cypress/fixtures/dom.html')
    cy.get('#input').type(privateKeyWithEnter)
  })
})