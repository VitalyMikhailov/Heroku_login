class LogedInPage {
    logoutButton()
    {
        return cy.get('[href="/logout"]');
    }

    successMessage()
    {
        return cy.get('.success');
    }

    secureHead()
    {
        return cy.get('h2');
    }

    secureSubhead()
    {
        return cy.get('.subheader');
    }

}

export default new LogedInPage()