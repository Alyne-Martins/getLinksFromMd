# Extrair links de arquivo markdown: v.1.0.0

**Esta biblioteca se destina à extrair links de um arquivo markdown.** 
um módulo de Node.js que receba uma string (em formato Markdown) e extraia todos os links encontrados. A implementação é uma função que recebe uma string e devolve um vetor de objetos.


## Os métodos utilizados na biblioteca são:

#### **getLinksFromMd(text);**

Exemplo de uso:

```
$node
> let toExtract = require("links-from-md")
> toExtract.getLinksFromMd("Oi você quer entrar no site [google](www.google.com) ?");
//[{href: 'www.google.com', text: 'google' }])
```


## versão 1.0.0

funcionalidades: 
- Recebe strings (em formato Markdown) 
- extrai todos os links encontrados
- Restringe a entrada para strings

Parâmetros:

- markdown texto em formato de marcação.

Retorna:

- uma matriz contendo os URLs dos links encontrados.

## instalação

- você deverá ter o node + npm instalados. Para guia de instalação, visite [o site oficial](https://www.npmjs.com/get-npm).
- proceda com a instalação com `$npm install links-from-md`


## roadmap oficial do projeto

#### versão 1.0.0 (released)
Extrair links de arquivo markdown:
- Recebe strings (em formato Markdown) 
- extrai todos os links encontrados
- Restringe a entrada para strings
