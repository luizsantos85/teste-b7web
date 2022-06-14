#Repositório Teste
https://github.com/suporteb7web/0522-fullstackjr

## QUESTIONÁRIO 📕

**1. Quais as partes principais de uma requisição HTTP?**

_Resposta:_ As principais partes são os HEADERS, onde são enviados os metodos, cabeçalhos e outros parametros, tipo de arquivo e o BODY, onde ficará o corpo da requisição.

**2. Qual a diferença entre colocar um script dentro do "head" e no fim do "body"?**

_Resposta:_ Colocando o script no head, ele será lido antes de carregar o documento em si, podendo ocasionar em erros. Colocando no body, ele primeiro renderizará o documento, depois o scripts.

**3. Qual a diferença entre display: block e display: inline-block ?**

_Resposta:_ Display block ocupam 100% da largura do elemento pai, já o inline-block não ocupa todo o espaço, as margens e paddings são respeitadas e não acrescenta quebra de linha, podendo utilizar outros elementos ao seu lado.

**4. É possível criar um site responsivo SEM media queries? Por que?**

_Resposta:_ Sim, através do javascript é possivel pegar as dimensões da tela, porém o código ficará um pouco mais 'verboso'.

**5. No Javascript, é obrigatório usar VAR para criar uma variável?**

_Resposta:_ Pode-se criar variáveis com LET e CONST onde ela ficaria visível no bloco onde foi declarada.

**6. Criar funções com "function() {}" e com "() => {}" tem alguma diferença além da sintaxe?**

_Resposta:_ A Arrow function é uma notação simplificada e facilitam na implementação de funções, são menos verbosas e permiti um retorno implícito dos valores retornados.

**7. Explique a lógica pra fazer uma paginação.**

_Resposta:_ Realiza-se uma chamada ao banco de dados, onde o mesmo devera retornar a consulta com o limit (por exemplo), pegando esse limit, criasse uma função para recebe-lá e trata-lá, passando ali um total de paginas com o total de itens e o limit, criasse uma variavel para receber o total de paginas e depois um delimitador, depois de validar criasse um laço de repetição e retorna o resultado.

**8. Qual a melhor forma de armazenar uma imagem no banco de dados?**

\_Resposta:\_Normalmente referencia-se a url da imagem ou o nome da imagem para que seja gravada no banco de dados, ficando a imagem em um local a parte, com isso facilita a leitura e não sobrecarrega o banco de dados.

**9. No React, quantos useEffect eu posso usar?**

_Resposta:_ Depende da aplicação, não se tem um limite de mais ou de menos, pode utilizar quantos forem necessários, porém pode afetar o desempenho da aplicação.

**10. Quais métodos de requisição preciso para criar um CRUD via API?**

_Resposta:_ Os principais são o GET e POST, para solicitações e envios de dados, em uma API REST se usa tambem o PUT, atualização de toda a requisição, PATCH, para atualização de apenas uma parte da requisição e DELETE para exclusão.
