// 7) Implemente um método que compare a igualdade de dois arrays e retorne um valor booleano.
// Entrada do método ([1,2,3,4],[1,2,3,4]), Resultado do método: true

const areEqual = (arr1, arr2) => {
  let n = arr1.length;
  let m = arr2.length;

  if (n != m)
    return false;

  arr1.sort()
  arr2.sort()

  for (let i = 0; i < n; i++)
    if (arr1[i] !== arr2[i])
      return false;

  return true;
}

areEqual([3, 5, 2, 5, 2], [2, 3, 5, 5, 2])

