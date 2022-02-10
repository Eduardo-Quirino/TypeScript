# **Curso de Typscript **       <img src="https://soshace.com/wp-content/uploads/2019/05/inside.png" alt="Disadvantages of Using TypeScript — Soshace • Soshace" style="zoom:25%;" />

*" https://youtube.com/playlist?list=PLb2HQ45KP0Wsk-p_0c6ImqBAEFEY-LU9H "*

## Rodar no Visual Studio Code

## Instalando o compilador TypeScript [#](https://code.visualstudio.com/docs/languages/typescript?WT.mc_id=javascript-14034-gllemos#_installing-the-typescript-compiler)

O Visual Studio Code inclui suporte à linguagem TypeScript, mas não inclui o compilador TypeScript, `tsc`. Você precisará instalar o compilador TypeScript globalmente ou em sua área de trabalho para transpilar o código-fonte TypeScript para JavaScript ( `tsc HelloWorld.ts`).

A maneira mais fácil de instalar o TypeScript é por meio do npm, o [Node.js Package Manager](https://www.npmjs.com/) . Se você tiver o npm instalado, poderá instalar o TypeScript globalmente ( `-g`) em seu computador:

```
npm install -g typescript
```

Você pode testar sua instalação verificando a versão.

```
tsc --version
```

Outra opção é instalar o compilador TypeScript localmente em seu projeto ( `npm install --save-dev typescript`) e tem o benefício de evitar possíveis interações com outros projetos TypeScript que você possa ter.



## Para iniciar a licação no VS Code 

Na raiz do rojeto(pasta do rojeto) digite < tsc --init > + ENTER

- Para executar, abra a alheta de comando ou digite Ctrl + Shift +P 
- Selecione tarefa de **configurações de build** padrão e selecione < **tst:compilar** >

## Para rodar

Entre no terminal, selecione a pasta  criada com extenção **JS** e digite  node + nome do arquivo JS 

EX:

>  **< node.app.js >** + ENTER
