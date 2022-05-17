// 2) Implemente um método que inverta um array, não utilize métodos nativos do array.
// Entrada do método ([1,2,3,4]), Resultado do método: [4,3,2,1]

const ordenadorDeArray = (array) => {
  let arrayCopy = [...array]
  let index = 0;
  let novoArray  = [];
  
  while (arrayCopy.length) {
      let lowerValue = arrayCopy[0]
      index= 0;

      for (let j = 0; j < arrayCopy.length; j++ ) {
          if (lowerValue > arrayCopy[j+1]) { 
              lowerValue = arrayCopy[j+1] 
              index = j+1
          }
          if (j+1 === arrayCopy.length) {
              arrayCopy.splice(index, 1)
              novoArray.push(lowerValue)
          }
      }
  }
  return novoArray
}

ordenadorDeArray([399,-20, 398,987,397,6,5,7,-800, 40,1,2,2,2,2, 3,50, 50, 50, 50, 50, 3,100,1,75,-10])