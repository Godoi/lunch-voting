context('Application Lounch Voting', () => { 
  describe('Accessing the Home Page', function () {
    it('successfully loads home', function() { 
      cy.visit('http://localhost:4200/');
      cy.wait(1000);
      cy.location().should(loc => {
        expect(loc.href).to.eq('http://localhost:4200/home');
      }); 
    });
    it('voting for the first restaurant', function() {
      cy.get('[data-cy=btn-vote]').eq(0).click();
      cy.wait(1000);
      cy.get('[data-cy=email]').type('darth.vader@darkside.sith');
      cy.wait(1000);
      cy.get('[data-cy=cySubmit]').click();
      cy.wait(1000);
      cy.get('[data-cy=total-votes]').eq(0).should(($identifier) => {
        expect($identifier[0].innerText).to.equal('1');
      });     
    }); 
    it('sum of votes for the first restaurant', function() {
      cy.wait(1000);
      cy.get('[data-cy=btn-vote]').eq(0).click();
      cy.wait(1000);
      cy.get('[data-cy=email]').type('darth.sidiou@starwars.com');
      cy.wait(1000);
      cy.get('[data-cy=cySubmit]').click();
      cy.wait(1000);
      cy.get('[data-cy=total-votes]').eq(0).should(($identifier) => {
        expect($identifier[0].innerText).to.equal('2');
      });     
    });
    it('voting twice is not allowed', function() {
      cy.get('[data-cy=btn-vote]').eq(0).click();
      cy.wait(1000);
      cy.get('[data-cy=email]').type('darth.vader@darkside.sith');
      cy.wait(1000);
      cy.get('[data-cy=cySubmit]').click();
      cy.wait(1000);
      cy.get('[data-cy=alert-warn]').should(($identifier) => {
        expect($identifier[0].innerText).to.equal('Não é permitido votar novamente.');
      });
    });
    it('validation of unregistered user', function() {
      cy.get('[data-cy=email]').type('harry.potter@griffindor.com');
      cy.wait(1000);
      cy.get('[data-cy=cySubmit]').click();
      cy.wait(1000);
      cy.get('[data-cy=alert-warn]').should(($identifier) => {
        expect($identifier[0].innerText).to.equal('Nenhum usuário encontrado!');
      });
    });

  });
});