// Crie uma função chamada toNumber
// A função pode receber number e string
// se a função receber um number retorne numero
// se a função receber um string retorne numero
// se ela receber algo diferente, retorne um erro. (throw "valor deve ser um numero")

function toNumber(value: number | string) {
  if (typeof value === 'number') {
    return value;
  } else if (typeof value === 'string') {
    return Number(value)
  } else {
    throw 'Valor deve ser um número!'
  }
}

console.log(toNumber(300))
console.log(toNumber('300'))
// console.log(toNumber(true))