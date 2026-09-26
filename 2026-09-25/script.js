import promptSync from 'prompt-sync';
const prompt = promptSync();

// Exercício 01 - Soma
let nums = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

function sum(nums) {
    let soma = 0;
    for (let num of nums) {
        soma += num;
    }
    return soma;
}
console.log("Soma:", sum(nums));

// Exercício 02 - Média
function med(nums){
    let soma = sum(nums);
    return soma / nums.length;
}
console.log("Média:", med(nums));

// Exercício 03 - Menor elemento
function menor(nums) {
    let min = nums[0];
    for (let i=1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}
console.log("Menor elemento:", menor(nums));

// Exercício 04 - Medalha de prata
function segundoMaior(nums) {
    let max = nums[0];
    let segundoMaior = max;
    for (let i=1; i < nums.length; i++) {
        if (nums[i] > max) {
            segundoMaior = max;
            max = nums[i];
        } else if (nums[i] > segundoMaior && nums[i] < max) {
            segundoMaior = nums[i];
        }
    }
    return segundoMaior;
}
console.log("Segundo maior elemento:", segundoMaior(nums));

// Exercício 05 - Filtro

function filtrarImpares(nums){
    let impares = [];
    for (let num of nums) {
        if (num % 2 !== 0) {
            impares.push(num);
        }
    }
    return impares;
}
console.log("Números ímpares:", filtrarImpares(nums));

// Exercício 06 - Inverte array
function inverterArray(nums) {
    let invertido = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        invertido.push(nums[i]);
    }
    return invertido;
}
console.log("Array invertido:", inverterArray(nums));

// Exercício 7 - Histograma
function histograma(nums) {
    let banda1 = [];
    let banda2 = [];
    let banda3 = [];
    let banda4 = [];
    let banda5 = [];
    for (let num of nums) {
        if (num>=1 && num<=20) {
            banda1.push(num);
        } else if (num>=21 && num<=40) {
            banda2.push(num);
        } else if (num>=41 && num<=60) {
            banda3.push(num);
        } else if (num>=61 && num<=80) {
            banda4.push(num);
        } else if (num>=81 && num<=100) {
            banda5.push(num);
        }
    }
    console.log("[1, 20]:" , banda1);
    console.log("[21, 40]:" , banda2);
    console.log("[41, 60]:" , banda3);
    console.log("[61, 80]:" , banda4);
    console.log("[81, 100]:" , banda5);
}
histograma(nums);

// Exercício 8 - Verificador
let alunos = ["João", "Maria", "Pedro", "Ana", "Lucas", "Beatriz", "Carlos", "Fernanda", "Gabriel", "Juliana"];

const nome = prompt("Digite o nome do aluno para verificar se ele está na lista: ");

function verificarAluno(nome) {
    for (let aluno of alunos) {
        if (aluno.toLowerCase() === nome.toLowerCase()) {
            return true;
        }
    }
    return false;
}
console.log("Aluno encontrado:", verificarAluno(nome));

// Exercício 9 - Comparador de Arrays
let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 5, 3, 4, 2];

function compararArrays(arr1, arr2) {
    if (arr1 == arr2) {
        return true;
    } else {
        return false;
    }
}
console.log("Arrays iguais:", compararArrays(array1, array2));

// Exercício 10 - Remove elemento do array
// #TOFIX
let arr = prompt("Digite os elementos do array separados por vírgula: ");

function removerElemento(arr, index) {
    arr.splice(1, index);
    return arr;
}
let index = prompt("Digite o índice do elemento que deseja remover do array: ");
console.log("Array após remoção:", removerElemento(arr, index));

// Exercício 11 - Palíndromo

// Exercício 12 - Intercalador

// Exercício 13 - Compactador