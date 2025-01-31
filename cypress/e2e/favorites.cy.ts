describe('Favorites Page', () => {
  beforeEach(() => {
    cy.visit('/favorites');
  });

  it('should display a list of favorite movies', () => {
    cy.get('.movie-grid .movie-card').should('have.length.greaterThan', 0);
  });

});
