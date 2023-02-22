
//   Soma Combinacional

// ENUNCIADO
//   Dado um conjunto de dados e um número alvo, você deve encontrar todas as combinações exclusivas 
//   entre valores do conjunto que resultem na soma do número alvo.

//   Observações:

//   Todos os números, inclusive o alvo, serão inteiros positivos
//   O resultado não deve obter combinações com valores repetidos. Exemplo:

//    combinate([2, 3, 5], 8) retornando

//    [
//         [2,2,2,2],
//         [2,3,3],
//         [3,2,3],
//         [3,3,2]  
//         [3,5]
//         [5,3]
//     ]

//   Os valores do conjunto de dados podem se repetir entre si, como por exemplo:

//   combinate([2, 3, 5], 8) retornando [2,2,2,2] e [2,3,3] como conjuntos que resultam na soma alvo.


//   Seguem mais alguns exemplos do retorno esperado:

//    combinate([2, 3, 5], 8) deve retornar

//    [
//         [2,2,2,2],
//         [2,3,3],
//         [3,5]
//     ]

//     outro exemplo: 

//     combinate([2, 3, 6, 7], 7) retorna

//     [
//        [2, 2, 3],
//        [7]
//     ]


function combinate(candidates, target) {
    // Função interna que faz a busca recursiva
    function backtrack(start, target, solution) {
        // Se a solução parcial tiver soma igual ao número alvo, adiciona à lista de resultados
        if (target === 0) {
            results.push(solution.slice());
            // Se a solução parcial tiver soma menor que o número alvo, continua a busca
        } else if (target > 0) {
            // Para cada candidato a partir do índice de início
            for (let i = start; i < candidates.length; i++) {
                // Para evitar combinações repetidas, ignora candidatos iguais aos anteriores
                if (i > start && candidates[i] === candidates[i - 1]) {
                    continue;
                }
                // Adiciona o candidato à solução parcial e continua a busca com os demais candidatos
                solution.push(candidates[i]);
                backtrack(i + 1, target - candidates[i], solution);
                // Remove o candidato da solução parcial para permitir que sejam consideradas outras combinações
                solution.pop();
            }
        }
    }

    // Ordena os candidatos para evitar combinações repetidas
    candidates.sort((a, b) => a - b);
    const results = [];
    backtrack(0, target, []);
    return results;
}


const candidates = [2, 3, 5];
const target = 8;
const results = combinate(candidates, target);
console.log(results);