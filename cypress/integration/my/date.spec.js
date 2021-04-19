/// <reference types="cypress" />

context("date react", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    it("should fill form", () => {
        cy.get("#form_test").type("2020-10-01")
        cy.get("#submit").click()

        cy.get("#result").contains("2020-10-01")
    })

    it("should set date", () => {
        cy.get("#justDate").type("2020-10-01")

        cy.get("#resultDate").contains("2020-10-01")
    })

    it("should set date react input", () => {
        cy.get("#dateReact").type("2020-10-01")

        cy.get("#resultDateReact").contains("2020-10-01")
    })


})