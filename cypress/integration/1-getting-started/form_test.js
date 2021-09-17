describe('Checking that cypress can navigate to my site and run tests', () => {

    beforeEach(() => {
        cy.visit('localhost:3000');
    })

    const textInput = () => cy.get('input[name=name]');
    const sizeInput = () => cy.get('#size-dropdown');
    const sauceInput = () => cy.get('#sauce-dropdown');
    const salamiInput = () => cy.get('input[name=salami]');
    const garlicInput = () => cy.get('input[name=garlic]');
    const redpepperInput = () => cy.get('input[name=redpepper]');
    const pizzaBtn = () => cy.get('#pizza-btn');
    const submitBtn = () => cy.get('#order-button');

    it('testing if we can type in the name input', () => {
        pizzaBtn().should('exist');
        pizzaBtn().click();
        textInput().should('exist');
        textInput().type('Ryan');
    })

    it('testing if you can select multiple toppings', () => {
        pizzaBtn().click();
        salamiInput().click();
        garlicInput().click();
        redpepperInput().click();
    })

    it('testing if you can submit your order', () => {
        pizzaBtn().click();
        textInput().type('ryan');
        sizeInput().select('small');
        sauceInput().select('traditional');
        submitBtn().click();
    })
})