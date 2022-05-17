// 3) Implemente um método que limpe os itens desnecessários de um array (false, undefined, strings vazias, zero, null).
// Entrada do método ([1,2,'', undefined]), Resultado do método: [1,2]

const compact = (items) => {
  let arrayCopy = [...items]
  let resultado = []

  for (let element of arrayCopy) {
    element && resultado.push(element)
  }
  return resultado;
}

compact(["", 0, false, 2, null, 1])