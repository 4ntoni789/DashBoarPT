export const calcularPunto = (num = "") => {
  let ress = "";
  for (let i = 0; i < num.length; i++) {
    ress += num[i];
    if (num.length - i == 4 || num.length - i == 7 || num.length - i == 10) {
      ress += ".";
    }
  }
  return ress;
}
//Esta función devuelve un numero con todos los puntos como si fuera una calculadora
// Ejemplo: calcularPunto(10000) devuelve: 10.000;
//Solo es posible con elementos de tipo String