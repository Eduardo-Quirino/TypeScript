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

- Para executar, abra a palheta de comando ou digite Ctrl + Shift +P 
- Selecione tarefa de **configurações de build** padrão e selecione < **tst:compilar** >

## Para rodar

Entre no terminal, selecione a pasta  criada com extenção **JS** e digite  node + nome do arquivo JS 

EX:

>  **< node.app.js >** + ENTER

**OU**



> **Ctrl + Shift + B**  e selecione opção monitorar   para criar executavel em JS

# **TIPOS BÀSICOS:**

## Digite anotações em variáveis

Ao declarar uma variável usando `const`, `var`ou `let`, você pode adicionar opcionalmente uma anotação de tipo para especificar explicitamente o tipo da variável:

```
let myName: string = "Alice";
```

> O TypeScript não usa declarações no estilo “tipos à esquerda”, como `int x = 0;` as anotações de tipo sempre vão *depois* da coisa que está sendo digitada.

Na maioria dos casos, porém, isso não é necessário. Sempre que possível, o TypeScript tenta *inferir* automaticamente os tipos em seu código. Por exemplo, o tipo de uma variável é inferido com base no tipo de seu inicializador:

```
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

Na maioria das vezes, você não precisa aprender explicitamente as regras de inferência. Se você está começando, tente usar menos anotações de tipo do que você pensa - você pode se surpreender com o número necessário de TypeScript para entender completamente o que está acontecendo.

## Arrays

Para especificar o tipo de um array como `[1, 2, 3]`, você pode usar a sintaxe `number[]`; esta sintaxe funciona para qualquer tipo (por exemplo `string[]`, é um array de strings e assim por diante). Você também pode ver isso escrito como `Array<number>`, o que significa a mesma coisa.

## Tipos de objeto

Além dos primitivos, o tipo mais comum de tipo que você encontrará é um *tipo de objeto* . Isso se refere a qualquer valor JavaScript com propriedades, que são quase todas elas! Para definir um tipo de objeto, simplesmente listamos suas propriedades e seus tipos.

Por exemplo, aqui está uma função que recebe um objeto tipo ponto:

```
// A anotação de tipo do parâmetro é um tipo de objeto
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });Experimentar
```

Aqui, anotamos o parâmetro com um tipo com duas propriedades - `x`e `y`- que são ambas do tipo `number`. Você pode usar `,`ou `;`para separar as propriedades, e o último separador é opcional de qualquer maneira.

A parte do tipo de cada propriedade também é opcional. Se você não especificar um tipo, ele será considerado `any`.

### Propriedades opcionais

Os tipos de objeto também podem especificar que algumas ou todas as suas propriedades são *opcionais* . Para fazer isso, adicione um `?`após o nome da propriedade:

```
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Ambos tudo bem
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });Experimentar
```

Em JavaScript, se você acessar uma propriedade que não existe, obterá o valor `undefined`em vez de um erro de tempo de execução. Por isso, ao *ler* uma propriedade opcional, você terá que verificar `undefined`antes de usá-la.

```
function printName(obj: { first: string; last?: string }) {
  // Erro - pode falhar se 'obj.last' não for fornecido!
  console.log(obj.last.toUpperCase());Object is possibly 'undefined'.Object is possibly 'undefined'.
  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // Uma alternativa segura usando a sintaxe JavaScript moderna:
  console.log(obj.last?.toUpperCase());
}
```

## Funções

As funções são o principal meio de transmissão de dados em JavaScript. O TypeScript permite especificar os tipos de valores de entrada e saída de funções.

### Anotações de tipo de parâmetro

Ao declarar uma função, você pode adicionar anotações de tipo após cada parâmetro para declarar quais tipos de parâmetros a função aceita. As anotações do tipo de parâmetro vão após o nome do parâmetro:

```
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}Experimentar
```

Quando um parâmetro tem uma anotação de tipo, os argumentos para essa função serão verificados:

```
// Would be a runtime error if executed!
greet(42);Argument of type 'number' is not assignable to parameter of type 'string'.Argument of type 'number' is not assignable to parameter of type 'string'.Experimentar
```

> Mesmo que você não tenha anotações de tipo em seus parâmetros, o TypeScript ainda verificará se você passou o número correto de argumentos.



### Anotações de tipo de retorno

Você também pode adicionar anotações de tipo de retorno. As anotações do tipo de retorno aparecem após a lista de parâmetros:

```
function getFavoriteNumber(): number {
  return 26;
}Experimentar
```

Assim como as anotações de tipo de variável, você geralmente não precisa de uma anotação de tipo de retorno porque o TypeScript inferirá o tipo de retorno da função com base em suas `return`instruções. A anotação de tipo no exemplo acima não altera nada. Algumas bases de código especificarão explicitamente um tipo de retorno para fins de documentação, para evitar alterações acidentais ou apenas por preferência pessoal.



### Funções anônimas

As funções anônimas são um pouco diferentes das declarações de função. Quando uma função aparece em um local onde o TypeScript pode determinar como ela será chamada, os parâmetros dessa função recebem tipos automaticamente.

Aqui está um exemplo:

```
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUppercase());Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUppercase());Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});Experimentar
```

Mesmo que o parâmetro `s`não tenha uma anotação de tipo, o TypeScript usou os tipos da `forEach`função, juntamente com o tipo inferido do array, para determinar o tipo `s`que terá.

Esse processo é chamado *de tipagem contextual* porque o *contexto* em que a função ocorreu informa qual tipo ela deve ter.

Semelhante às regras de inferência, você não precisa aprender explicitamente como isso acontece, mas entender que isso *acontece* pode ajudá-lo a perceber quando as anotações de tipo não são necessárias. Mais tarde, veremos mais exemplos de como o contexto em que um valor ocorre pode afetar seu tipo.
