// 10) Implemente um método que encontre os valores comuns entre dois arrays.
// Entrada do método ([6, 8], [8, 9]), Resultado do método: [8]

const intersecao = (a,b) => {
  const novoArray = []
  
  for (let index of a) {
    for (let j of b) 
      if (index === j) { 
        novoArray.push(index);
        break
      }
  }
  return novoArray
}

intersecao(a,b)