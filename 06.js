// 6) Implemente um método que retorne um array, sem valores duplicados.
// Entrada do método ([1,2,3,3,2,4,5,4,7,3]), Resultado do método: [1,2,3,4,5,7]

const uniq = (args) => {
  let result = [...args]
  
  for (let index = 0; index < result.length; index++) {
    for ( let j = 1; j < result.length; j++) {
      let item = result[index]
      let comparedItem = result[j] 
      let equalItems = index !== j && item === comparedItem

      equalItems && result.splice(j, 1)
    }
  }
  return result
}

uniq([1,1,2,3,13,4,2,3,13,15])