context('Application Lounch Voting', () => { 
  it('successfully loads home', function() { 
    cy.location().should(loc => {
      expect(loc.href).to.eq('http://localhost:4200/');
    }); 
  });
});