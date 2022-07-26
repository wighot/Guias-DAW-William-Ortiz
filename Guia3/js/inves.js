function creaSumador(x) {
  return function (y) {
    return x + y
  }
}

const suma5 = creaSumador(5)
const suma10 = creaSumador(10)

console.log(suma5(2))
// muestra 7
console.log(suma10(3))