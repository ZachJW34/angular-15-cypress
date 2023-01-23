/// <reference types="cypress" />
import {MyService} from '../../../src/app/services/my.service'

console.log({MyService})

describe('example to-do app', () => {
  it('works', () => {
    cy.visit("http://localhost:4200/");
  })
})
