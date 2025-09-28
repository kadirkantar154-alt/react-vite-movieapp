describe('Trending Movies Appwrite Integration', () => {
    it('should write or update Appwrite documents and render trending movies', () => {

        // POST veya PATCH çağrılarını yakala
        cy.intercept('POST', '**/databases/*/collections/*/documents').as('createDocument')
        cy.intercept('PATCH', '**/databases/*/collections/*/documents/*').as('updateDocument')
        cy.intercept('GET', '**/databases/*/collections/*/documents*').as('getDocuments')

        cy.visit('https://kadirkantar154-alt.github.io/react-vite-movieapp/')

        const searchTerm = 'Land'
        cy.get('input[placeholder="Search through thousands of movies"]')
            .type(`${searchTerm}`)

        cy.wait('@updateDocument').its('response.statusCode').should('eq',200)



        // Trending Movies listesi alındı mı kontrol et
        cy.wait('@getDocuments').its('response.statusCode').should('eq', 200)

        // DOM üzerinden render kontrolü
        cy.get('.trending', { timeout: 5000 }).should(($cards) => {
            if ($cards.length === 0) {
                throw new Error('Trending Movies did not render! Check Appwrite write/read.')
            }
        })
    })
})
