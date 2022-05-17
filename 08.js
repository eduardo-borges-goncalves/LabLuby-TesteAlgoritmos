// *8)* Implemente um método que remova os aninhamentos de um array de arrays para um array unico.<br>
// Entrada do método ([1, 2, [3], [4, 5]]), Resultado do método: [1, 2, 3, 4, 5] 

const concat = (a) => ([].concat(...a))

concat([1, 8, [3], [4, 5]])