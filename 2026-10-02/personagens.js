let personagens = [];
console.log("Tamanho inicial do array de personagens: "+personagens.length);
console.log(personagens);

let personagem01 = {
 nome: "Pedro",
 tipo: "Professor",
 idade: 22
};
let personagem02 = {
 nome: "João",
 tipo: "Aluno",
 idade: 19
};

console.log("Adicionando personagem 1");
personagens.push(personagem01);
console.log("Tamanho atual do array: "+personagens.length);

console.log("Adicionando personagem 2");
personagens.push(personagem02);
console.log("Tamanho atual do array: "+personagens.length);


let personagem03 = {
 nome: "Voltei",
 tipo: "Professor",
 idade: 55
};

console.log("Adicionando personagem 3");
personagens.push(personagem03);
console.log("Tamanho atual do array: "+personagens.length);

console.log("Array de personagens: ");
console.log(personagens);
