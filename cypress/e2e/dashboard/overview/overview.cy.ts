describe("Loading dashboard", () => {
  it("Displays 'Dashboard' in the header", () => {
    cy.visit("/");

    cy.get('[data-cy="dashboard-header"]')
      .get("h1")
      .should("have.text", "Dashboard");
  });
});
