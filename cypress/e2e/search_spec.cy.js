describe('Movie Search', () => {
    it('should fetch movies from TMDB API when searching', () => {
        cy.intercept('GET', '**/search/movie**').as('searchMovies')

        cy.visit('http://localhost:5173')

        cy.get('input[placeholder="Search through thousands of movies"]').type('Inception')

        cy.wait('@searchMovies').its('response.statusCode').should('eq', 200)

        cy.get('.movie-card').then(($cards) => {
            const length = $cards.length
            expect(length, `Expected at least 1 movie card but found ${length}`).to.be.gte(1)
        })


    })
})
