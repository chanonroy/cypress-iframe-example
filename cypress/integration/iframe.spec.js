describe('iFrame tests', function() {

  it('can target elements inside an iFrame', function() {
    cy.visit('localhost:4500');
    cy.get("#basic").iframe().find("#target").type("HELLO WORLD");
  });

  it('can handle a nested iFrame', function() {
    cy.get("#nested").iframe().find("#inner").iframe().find('#target').type('HELLO WORLD');
  });

})
