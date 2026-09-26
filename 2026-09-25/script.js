// ====================================================================
// Exercícios - Aula de Introdução ao JavaScript (Front-End 1)
// Nota: No ambiente do navegador (Front-End), o JavaScript roda diretamente
// e funções como prompt() e console.log() são nativas (não precisam de Node.js).
// ====================================================================

const numsPadrao = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100];

// 1. Soma: Crie uma função que recebe um array de números inteiros e retorna a soma dos seus elementos.
function sum(nums) {
    let soma = 0;
    for (let num of nums) {
        soma += num;
    }
    return soma;
}
console.log("01. Soma:", sum(numsPadrao));

// 2. Média: Crie uma função que recebe um array de números inteiros e retorna a média dos seus elementos.
function med(nums) {
    if (!nums || nums.length === 0) return 0;
    let soma = sum(nums);
    return soma / nums.length;
}
console.log("02. Média:", med(numsPadrao));

// 3. Menor elemento: Crie uma função que recebe um array de números inteiros e retorna o menor elemento.
function menor(nums) {
    let min = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}
console.log("03. Menor elemento:", menor(numsPadrao));

// 4. Medalha de prata: Crie uma função que recebe um array de números inteiros e retorna o segundo maior elemento.
function segundoMaior(nums) {
    let max = -Infinity;
    let segundo = -Infinity;

    for (let num of nums) {
        if (num > max) {
            segundo = max;
            max = num;
        } else if (num > segundo && num < max) {
            segundo = num;
        }
    }
    return segundo;
}
console.log("04. Segundo maior elemento:", segundoMaior(numsPadrao));

// 5. Filtro: Crie uma função que recebe um array de números inteiros e retorna um novo array contendo apenas os elementos ímpares.
function filtrarImpares(nums) {
    let impares = [];
    for (let num of nums) {
        if (num % 2 !== 0) {
            impares.push(num);
        }
    }
    return impares;
}
console.log("05. Números ímpares:", filtrarImpares(numsPadrao));

// 6. Inverso: Crie uma função que recebe um array de números inteiros e retorna um novo array com os elementos invertidos.
function inverterArray(nums) {
    let invertido = [];
    for (let i = nums.length - 1; i >= 0; i--) {
        invertido.push(nums[i]);
    }
    return invertido;
}
console.log("06. Array invertido:", inverterArray(numsPadrao));

// 7. Histograma: Crie uma função que recebe um array de números inteiros entre 1 e 100 e imprime um histograma de cinco (5) bandas no console.
function histograma(nums) {
    let bandas = [0, 0, 0, 0, 0];
    for (let num of nums) {
        if (num >= 1 && num <= 20) bandas[0]++;
        else if (num >= 21 && num <= 40) bandas[1]++;
        else if (num >= 41 && num <= 60) bandas[2]++;
        else if (num >= 61 && num <= 80) bandas[3]++;
        else if (num >= 81 && num <= 100) bandas[4]++;
    }

    const resultado = [
        `[01,  20] : ${"* ".repeat(bandas[0]).trim()}`,
        `[21,  40] : ${"* ".repeat(bandas[1]).trim()}`,
        `[41,  60] : ${"* ".repeat(bandas[2]).trim()}`,
        `[61,  80] : ${"* ".repeat(bandas[3]).trim()}`,
        `[81, 100] : ${"* ".repeat(bandas[4]).trim()}`
    ];

    console.log("07. Histograma:");
    resultado.forEach(linha => console.log(linha));
    return resultado.join("\n");
}
histograma([32, 5, 63, 68, 89, 10, 42, 12, 16, 22, 72, 97]);

// 8. Verificador: Crie uma função que recebe um array de nomes de alunos, pede ao usuário informar um nome específico (via prompt) e retorna se está presente.
const alunosPadrao = ["João", "Maria", "Pedro", "Ana", "Lucas", "Beatriz", "Carlos", "Fernanda", "Gabriel", "Juliana"];

function verificarAluno(alunos, nomeInformado = null) {
    // Se não for passado um nome direto, usa o prompt() nativo do navegador
    const nome = nomeInformado !== null ? nomeInformado : prompt("Digite o nome do aluno para verificar se ele está na lista:");
    if (!nome) return false;

    for (let aluno of alunos) {
        if (aluno.toLowerCase() === nome.trim().toLowerCase()) {
            return true;
        }
    }
    return false;
}
console.log("08. Verificador (exemplo 'Lucas'):", verificarAluno(alunosPadrao, "Lucas"));

// 9. Comparador: Crie uma função que recebe dois arrays e retorna um booleano indicando se eles são iguais ou não.
function compararArrays(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}
console.log("09. Comparador ([1,2,3], [1,2,3]):", compararArrays([1, 2, 3], [1, 2, 3]));
console.log("09. Comparador ([1,2,3], [1,5,3]):", compararArrays([1, 2, 3], [1, 5, 3]));

// 10. Removedor: Crie uma função que recebe um array e um índice, remove o elemento na posição informada e retorna o array resultante.
function removerElemento(arr, index) {
    let copia = [...arr];
    if (index >= 0 && index < copia.length) {
        copia.splice(index, 1);
    }
    return copia;
}
console.log("10. Removedor (remover índice 1 de ['A','B','C','D']):", removerElemento(['A', 'B', 'C', 'D'], 1));

// 11. Palíndromo: Crie uma função que recebe um array de caracteres (ou string) e retorna se ele representa um palíndromo.
function isPalindromo(entrada) {
    let str = Array.isArray(entrada) ? entrada.join("") : String(entrada);
    str = str.toLowerCase().replace(/\s+/g, "");
    let invertida = str.split("").reverse().join("");
    return str.length > 0 && str === invertida;
}
console.log("11. Palíndromo ('arara'):", isPalindromo("arara"));
console.log("11. Palíndromo (['a','n','a']):", isPalindromo(['a', 'n', 'a']));
console.log("11. Palíndromo ('javascript'):", isPalindromo("javascript"));

// 12. Intercalador: Crie uma função que recebe dois arrays de mesmo tamanho e retorna um novo array intercalando os elementos.
function intercalarArrays(arr1, arr2) {
    let resultado = [];
    for (let i = 0; i < arr1.length; i++) {
        resultado.push(arr1[i]);
        resultado.push(arr2[i]);
    }
    return resultado;
}
console.log("12. Intercalador ([1,2,3], ['a','b','c']):", intercalarArrays([1, 2, 3], ['a', 'b', 'c']));

// 13. Compactador: Crie uma função que recebe um array de caracteres e retorna onde sequências consecutivas repetidas são substituídas por apenas uma ocorrência.
function compactarArray(arr) {
    let resultado = [];
    for (let i = 0; i < arr.length; i++) {
        if (i === 0 || arr[i] !== arr[i - 1]) {
            resultado.push(arr[i]);
        }
    }
    return resultado;
}
console.log("13. Compactador (['a','a','b','b','b','c','a','a']):", compactarArray(['a', 'a', 'b', 'b', 'b', 'c', 'a', 'a']));