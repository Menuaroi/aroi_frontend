describe("Navigation", () => {
  it("should navigate to the homepage", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    // The new page should contain an h1 with "About page"
    cy.get("h1").contains("Homepage");
  });
});
