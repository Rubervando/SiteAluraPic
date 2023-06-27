const elementos = require ('../../support/Elements/globalElements').ELEMENTS
const dados = require('faker-br');

describe('Teste de tela de Cadastro', () => {
    
    beforeEach(() => {
        cy.visit('/')
        });

    it('Teste 1) Cadastro com sucesso', () => {
        var email = dados.internet.email();
        var nome = dados.name.firstName();
        var nomeUsuario = dados.name.firstName();
        const userName = nomeUsuario.toLowerCase();
        const emailValido = email.toLowerCase();

        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type(emailValido)
        cy.get(elementos.nomeCompleto).type(nome)
        cy.get(elementos.usuario).type(userName)
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.wait(2000)
        cy.get(elementos.botaoCadastro).click()
        cy.get(elementos.botaoVoltarAoLogin).click()

        cy.get(elementos.UsuarioLogin).type(userName)
        cy.get(elementos.senhaLogin).type('12345678')
        cy.get(elementos.botaoLogin).click()
        
        cy.get('a.mr-1').invoke('text').should('contains', userName)
    });
    
    
    it('Teste 2) Cadastro com o campo email invalido,, sem @', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testetesteteste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Invalid e-mail')
    });
    it('Teste 3) Cadastro com o campo email invalido,, com espaço', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('teste teste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Invalid e-mail')
    });
    it('Teste 4) Cadastro com o campo email invalido,, com o .com no final', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Invalid e-mail')
    });
    it('Teste 5) Cadastro com o campo email invalido,, com o parêntes', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('teste(teste)@.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Invalid e-mail')
    });
    it('Teste 6) Cadastro com o campo email invalido, com Dois @', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('teste@teste@.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Invalid e-mail')
    });
    it('Teste 7) Cadastro com o campo nome do usuario invalido, letra maiuscula', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('Mentoria')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Must be lower case')
    });
    it('Teste 8) Cadastro com o campo nome do usuario invalido, com o minimo caractere', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('m')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Mininum length is 2')
    });
    it('Teste 9) Cadastro com o campo nome do usuario invalido, com o maximo de caracteres', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoriamentoriamestoriatesteteste')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Maximun length is 30')
    });
    it('Teste 10) Cadastro com o campo nome do usuario invalido, com duas palavras', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria teste')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Must be lower case')
    });
    it('Teste 11) Cadastro com o campo nome do usuario invalido, com caracteres especiais', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria!')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Must be lower case')
    });
    it('Teste 12) Cadastro com o campo nome do usuario invalido, com acentos no nome', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('méntoria')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Must be lower case')
    });
    it('Teste 13) Cadastro com o campo nome do usuario invalido, com espaço no nome', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria ')
        cy.get(elementos.senhaDoUsuario).type('12345678')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Must be lower case')
    });    
    it('Teste 14) Cadastro com o campo senha do usuario invalido, com o minimo de caracteres', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria')
        cy.get(elementos.senhaDoUsuario).type('12345')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Mininum length is 8')
    });
    it('Teste 15) Cadastro com o campo senha do usuario invalido, com o maximo de caracteres', () => {
        cy.get(elementos.botaoParaCadastrar).click()
        cy.get(elementos.emailDoUsuario).type('testeteste@teste01.com')
        cy.get(elementos.nomeCompleto).type('Testador de Qualidade')
        cy.get(elementos.usuario).type('mentoria')
        cy.get(elementos.senhaDoUsuario).type('1234578910111213141516171819')
        cy.get(elementos.botaoCadastro).click()
        
        cy.get('.text-danger').invoke('text').should('contains','Maximun length is 18')
    });
});