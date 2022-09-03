import App from '../src/main';

test('contarPares()', () => {
  let myApp = new App();
  let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  expect(myApp.contarPares(numeros)).toBe(5);
});
