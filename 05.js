// 5) Implemente um método que retorne um array, sem os itens passados por parâmetro depois do array de entrada. Entrada do método ([5,4,3,2,5], 5,3), Resultado do método: [4,2]

const diferenca = (a,b,c) => (
  a.filter(item => {
    if ( item !== b && item !== c) {
      return item
    }
  }).sort()
)

diferenca([1,2,3,5,6,7,5,6, 1, 2], 7,8,) 