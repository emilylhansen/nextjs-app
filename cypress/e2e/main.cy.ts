describe("Reset and Seed Test", () => {
  it("Resets and seeds the DB", () => {});
  beforeEach(() => {
    cy.task("resetDB");
    cy.task("seedDB");
    cy.visit("/");
  });
});
