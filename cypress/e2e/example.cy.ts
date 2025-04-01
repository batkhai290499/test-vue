// https://on.cypress.io/api

describe('My First Test', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'You did it!')
    cy.get('input[type="text"]').should('exist')
    cy.get('input[type="text"]').type('John Doe')
    cy.get('button').contains('Search').click()
    cy.get('ul').should('exist')
    cy.get('ul').children().should('have.length.greaterThan', 0)
    cy.get('ul').children().first().should('contain', 'John Doe')
    cy.get('ul').children().first().should('not.contain', 'Jane Doe')
    cy.get('ul').children().first().should('not.contain', 'John Smith')
    cy.get('ul').children().first().should('not.contain', 'John Doe')
    cy.get('ul').children().first().should('not.contain', 'John Doe')
  })
})
