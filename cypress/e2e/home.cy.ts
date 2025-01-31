describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the title "Popular Movies"', () => {
    cy.get('h1').should('contain', 'Popular Movies');
  });

  it('should display a list of movies', () => {
    cy.intercept('GET', '**/omdbapi.com/?s=movie*').as('getMovies');
    cy.wait('@getMovies');
    cy.get('.movie-grid .movie-card', { timeout: 10000 }).should('have.length.greaterThan', 0);
  });

  it('should navigate to the next page when "Next" is clicked', () => {
    cy.intercept('GET', '**/omdbapi.com/?s=movie*').as('getMovies');
    cy.wait('@getMovies');
    cy.get('.pagination button', { timeout: 10000 }).contains('Next').click();
    cy.url().should('include', '?page=2');
    cy.get('.movie-grid .movie-card').should('have.length.greaterThan', 0);
  });
});
