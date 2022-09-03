import App from '../src/main';

test('generarVector() tamaño correcto', () => {
  let myApp = new App();
  expect(myApp.generarVector(10, 20, 30).length).toBe(10);
});

test('generarVector() contenido correcto', () => {
  let myApp = new App();
  let vector = myApp.generarVector(10, 20, 30);

  for (let i = 0; i < vector.length; i++) {
    expect(vector[i]).toBeGreaterThanOrEqual(20);
    expect(vector[i]).toBeLessThanOrEqual(30);
  }
});
