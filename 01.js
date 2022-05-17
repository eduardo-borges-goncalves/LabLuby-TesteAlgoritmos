// 1) Implemente um método que crie um novo array baseado nos valores passados.
// Entradas do método (3,a), Resultado do método: ['a', 'a', 'a']

const newArray = (length, element) => {
  const result = []
  for (let i = 0; i< length; i++) result.push(element);
  return result
}

newArray(10, "a")
