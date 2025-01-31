describe('Search Page', () => {
  beforeEach(() => {
    cy.visit('/search');
  });

  it('should display a search input', () => {
    cy.get('input[placeholder="Search for a movie"]').should('exist');
  });

  it('should display search results when a query is entered', () => {
    cy.get('input[placeholder="Search for a movie"]').type('test{enter}');
    cy.get('.movie-grid .movie-card').should('have.length.greaterThan', 0);
  });
});
