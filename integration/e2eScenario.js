describe('Tech Challenge - Automation', () => {
    beforeEach(() => {
        //Given a user is on the main domain page
        cy.visit('https://www.domain.com.au')
    })

    it('Scenario 1', () => {
        //When they click onto "Buy"
        cy.get("[data-testid='buy-navigation']").click()

        //then Buy  button is in focus
        cy.get("[data-testid='buy-navigation']").should('have.focus')

        //When they click onto "Rent"
        cy.get("[data-testid='rent-navigation']").click()

        //Then page should be loaded with new url and Rent button in fovus
        cy.url().should('include','mode=rent')
        cy.get("[data-testid='rent-navigation']").should('have.focus')

        //When they clcik on New Homes
        cy.get("[data-testid='newhomes-navigation']").click()

        //Then page should be loaded with new url and new homes button in focus
        cy.url().should('include','new-homes')
        cy.get("[data-testid='newhomes-navigation']").should('have.focus')

        //When they click onto "Sold"
        cy.get("[data-testid='sold-navigation']").click()

        //Then page should be loaded with new url and Sold button in focus
        cy.url().should('include','mode=sold')
        cy.get("[data-testid='sold-navigation']").should('have.focus')

        //When they click onto "Retirement"
        cy.get("[data-testid='retirement-navigation']").click()

        //Then page should be loaded with new url and Retirment button in focus
        cy.url().should('include','retirement')
        cy.get("[data-testid='retirement-navigation']").should('have.focus')

        //When they click onto "rural"
        cy.get("[data-testid='rural-navigation']").click()

        //Then page should be loaded with new url and Rural button in focus
        cy.url().should('include','rural')
        cy.get("[data-testid='rural-navigation']").should('have.focus')

    })

    it('Scenario 2', () => {

        //when they type Sydney in the search box

        cy.get("[data-testid='search-bar-desktop']").type('Sydney')

        //when they then click to search for properties
        cy.get("[data-testid='search-button']").click()

        //then url should change and have search results
        cy.url().should('include','excludeunderoffer=1&suburb=sydney')
        cy.get("[data-testid='summary']").contains('Properties for sale in Sydney')
    })
})