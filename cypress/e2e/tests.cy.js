// ------- CONSIDERAÇÕES IMPORTANTES -----------
// 1 - Por algum motivo dados como, CEP não está sendo possível inserir sempre informando que o dado está inválido
// Isso interfere diretamente no processo de checkout de compra e, consequentemente no objetivo deste desafio.
// 2 - Todos os produtos vendidos por TENDA estão indisponíveis, sendo assim impossível seguir os critérios de aceite do desafio.
// 3 - Recomendo que a documentação seja atualizada com credenciais de teste e um perfil com dados válidos para finalizar todo o processo.


describe ('E-commerce testes automatizados', () => {

        beforeEach (() => {
            cy.visit('/login').wait(1000)
        })

        // Teste 1 - Criar um cadastro na plataforma pelo ambiente de desenvolvimento e utilizar esse usuário para fazer login e realizar o teste automatizado.
        it('Logar com credenciais válidas', () => {
            cy.login();
        })
        // Teste 2 - Adicionar dois produtos ao carrinho - um produto Tenda e um produto de um seller.
        // Teste 3 - Testar a funcionalidade de adicionar e remover unidades desses dois itens no
        //IMPORTANTE - TODOS os Produtos TENDA estão INDISPONÍVEIS na plataforma. 
        it('Adicionando produtos de Seller no carrinho', () => {
            cy.login();
            cy.itensManagement();
            cy.checkout();            
        })
        
})