
// ------- Login Commands ---------- 
Cypress.Commands.add('login', () => {
    cy.get('input[id="login"]').type(Cypress.env('email'), { log: false }); // Escondendo o e-mail nos logs por segurança
    cy.get('input[id="password"]').type(Cypress.env('password'), { log: false }); // Escondendo a senha nos logs por segurança
    cy.get('button[type="submit"]').click().wait(8800);
    cy.get('.ButtonClose > .svgIcon').click();
    
})

Cypress.Commands.add('itensManagement', () => {
    cy.get('.disclaimer-container > [data-cy="btn-"]').click();
    cy.scrollTo(0, 3500);
    cy.get('a[href="/marketplace"]').contains('Marketplace').click({force:true});
    cy.get('span.title-subcategory').contains('Produtos Seller').click({force:true}).wait(1000);
    cy.scrollTo(0, 250);
    cy.contains('h3', 'Vassoura Varry 1000 Bettanin 1111').get(':nth-child(1) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click({force:true});
    cy.get('.item-in-cart').should('be.visible');
    cy.contains('h3', 'Refrigerante Sabor Limão Sprite 2').get(':nth-child(2) > .showcase-card-content > .menu-actions-icons > .ButtonBuyComponent > [data-cy="btn-"]').click({force:true});
    cy.get('.item-in-cart').should('be.visible');
})

Cypress.Commands.add('checkout', () => {
    cy.get('.cartblock-bottom > [data-cy="btn-"]').click().wait(1000);     //Indo para a página do Carrinho de Compras
    cy.scrollTo(0, 400);
    cy.get(':nth-child(1) > .cart-card-content > .menu-actions-icons > .box-quantity > .btn-action-decrement').click();
    cy.wait(2000);
    cy.get('.btn-action').click().wait(1200);
    cy.get('.resume-buttons > .btn').click().get('.resume-buttons > .btn').click();
    cy.scrollTo('top');
})