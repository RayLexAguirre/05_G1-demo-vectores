export default class App {

    generarAleatrio(a, b){

        let aleatorio = Math.trunc (Math.random() * (b - a)) + a;

        return aleatorio; 
    }

    esPar(numero) {
        if(numero % 2 == 0) {
            return true;
        } else {
            return false 
        }
    }
    
    generarVector(n, a, b){
        let vector = [];

        for(let i = 0; i < n; i++){
            vector.push(this.generarAleatrio(a, b));
        }

        return vector;
    }

    contarPares(numeros) {
        let pares = 0;

        for(let i = 0; i <= numeros.length; i++) {
            if(this.esPar(numeros[i])) {
                pares++;
            }
        }

        return pares;
    }

    obtenerImpares(vector){
        let impares = [];

        for(let i = 0; i < vector.length; i++){
            if(!this.esPar(vector[i])){
                impares.push(vector[i]);
            }
        } 

        return impares;
    }

    sonIgualLongitud(vector1, vector2){
        if(vector1.length == vector2.length) {
            return true;
        } else {
            return false;
        }
    }

    sumar(numeros1, numeros2) {
        if(!this.sonIgualLongitud(numeros1, numeros2)) {
            return -1
        }

        let suma = [];

        for(let i = 0; i < numeros1.length; i++){
            suma.push(numeros1[i] + numeros2[i]);
        }

        return suma;
    }
}

let app = new App();

console.log(app.generarAleatrio(10, 20));
console.log(app.generarAleatrio(5, 15));
console.log(app.generarVector(10, 50, 100));

let vPrueba = app.generarVector(10, 50, 100);
console.log(vPrueba);
let vPrueba2 = app.generarVector(10, 50, 100);
console.log(app.contarPares(vPrueba));
console.log(app.obtenerImpares(vPrueba));
console.log(app.sumar(vPrueba, vPrueba2));
