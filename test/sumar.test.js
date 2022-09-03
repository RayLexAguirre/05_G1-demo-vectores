import App from '../src/main';

test('sumar() vectores de igual longitud', () => {
  let myApp = new App();
  let numeros1 = [1, 2, 3, 4, 5];
  let numeros2 = [10, 8, 6, 4, 2];
  let resultado = [11, 10, 9, 8, 7];
  expect(myApp.sumar(numeros1, numeros2).sort()).toEqual(resultado.sort());
});

test('sumar() vectores de diferente longitud', () => {
  let myApp = new App();
  let numeros1 = [1, 2, 3, 4, 5, 7];
  let numeros2 = [10, 8, 6, 4, 2];
  expect(myApp.sumar(numeros1, numeros2)).toBe(-1);
});
