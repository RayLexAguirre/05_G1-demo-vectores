import App from '../src/main';

test('obtenerImpares()', () => {
  let myApp = new App();
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  let resultado = [1, 3, 5, 7, 9, 11];

  expect(myApp.obtenerImpares(numeros).sort()).toEqual(resultado.sort());
});
