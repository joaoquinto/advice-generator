describe("Checking request API", () => {
  it("click button to request API", () => {
    cy.visit("http://localhost:8080/");
    cy.intercept("https://api.adviceslip.com/advice").as("getQuote");
    cy.get("button").click();
    cy.wait("@getQuote").its("response.statusCode").should("be.oneOf", [200]);
    cy.wait("@getQuote").its("response.body").should("not.be", null);
  });
});
