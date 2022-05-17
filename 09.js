// 9) Implemente um método divida um array por uma quantidade passada por parâmetro.
// Entrada do método ([1, 2, 3, 4, 5], 2), Resultado do método: [[1, 2], [3, 4], [5]]

const chunk = (valores, tamanho) => {
  let arrayCopy = [...valores]
  let block = []
  let resultado = []

  while (arrayCopy.length > 0) {
    block = []
    for ( let i = 0; i < tamanho; i++ ) {
      if (arrayCopy[0] !== undefined) {
        block.push(arrayCopy[0]);
        arrayCopy.shift();
      }
    }
    resultado.push(block);
  }

  return resultado;
}

chunk([1,2,3,4,5,6,7], 3)