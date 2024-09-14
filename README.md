# Projeto realizado como teste para estágio front end

> Obs.: comentários e commits feitos em inglês

## Link descrição do projeto: https://github.com/camisetasroma/estagio-front

## Como rodar
> necessário npm e editor de texto pré instalado
1. Clone ou baixe esse repositório;
2. Baixe scripts do react: ```npm install react-scripts```
3. Rode ```npm start```

## Ferramentas usadas:

- Reactjs
- Tailwind

## Decisões e como pensei:

### Para telas maiores:
Dividi a tela em duas divs, uma contendo a imagem e outra o formulário, ambas com propriedade "basis" para especificação de largura, e sua parent div com h-screen para preenchimento total da tela 

### Para telas menores:
Dividi a tela em duas divs, uma contendo a imagem e outra o formulário, ambas com propriedade "basis" para especificação de largura, e sua parent div com h-screen para preenchimento total da tela 

### Desenvolvimento do formulário:
Criei estrutura geral no Login.js, montei componentes separados tanto para os inputs de text e checkbox. Dentro do Input.js aproveitei para implementar lógica quanto a exibir e ocultar a senha, utilizando heroicons para o botão relacionado.

No geral, não tive tanta dificuldade com react, pois estava desenvolvendo outra aplicação web com o mesmo, utilizando bootstrap, além de outros projetos que não levei para frente. Link: https://github.com/VitorCdSouza/go-movies-front-end. Obs.: esta bem simples quanto a aparência pois o foco era base de componentes e construção de api em golang.