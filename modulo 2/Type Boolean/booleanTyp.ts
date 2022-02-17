//Transpilação do arquivo: <Windows> CTRL + B >>> tsc: buil/watch

//==> Exemplo 1
let tarefaConcluida: boolean = true;
let tarefaPendente: boolean = false;

console.log(tarefaConcluida);
console.log(tarefaPendente);

//==> Exemplo 2
let concluida: boolean = false;

if (!concluida) {
  console.log("Tarefa foi concluida com sucesso!");
} else {
  console.log("Tarefa está pendente");
}
