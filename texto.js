//Funcion de suma de dos numeros

function sumar(a, b) {
    return a + b;
}

module.exports = sumar;

// Pruebas de la funcion suma

//console.log("Prueba 1: ", sumar(2, 3) === 5);
//console.log("Prueba 2: ", sumar(0, 0) === 0);
//console.log("Prueba 3: ", sumar(-5, 5) === 0);
//console.log("Prueba 4: ", sumar(10, -3) === 7);
//console.log("Prueba 5: ", sumar(7.5, 2.5) === 10);

//Funcion de resta de dos numeros

function restar(a, b) {
    return a - b;
}

module.exports = restar;

//Prueba para la función restar

// console.log("Prueba 1: ", restar(10, 5) === 5);
// console.log("Prueba 2: ", restar(0, 0) === 0);
// console.log("Prueba 3: ", restar(10, -3) === 13);
// console.log("Prueba 4: ", restar(7.5, 2.5) === 5);
// console.log("Prueba 5: ", restar(-5, 5) === -10);

// Funcion Multiplicacion de dos numeros

function multi(a, b) {
    return a * b;
}

// Prueba de la funcion multi

// console.log("Prueba 1: ", multi(2, 3) === 6);
// console.log("Prueba 2: ", multi(0, 5) === 0);
// console.log("Prueba 3: ", multi(-5, 5) === -25);
// console.log("Prueba 4: ", multi(10, -3) === -30);
// console.log("Prueba 5: ", multi(7.5, 2) === 15);

//Funcion division de dos numeros

function division(a, b) {
    if (a || b === 0) {
        return "Error: No se puede dividir por 0";
    }
    return a / b;
}

// Prueba de la funcion division

// console.log("Prueba 1: ", division(6, 3) === 2);
// console.log("Prueba 2: ", division(0, 5) === "Error: No se puede dividir por 0");
// console.log("Prueba 3: ", division(-10, 2) === -5);
// console.log("Prueba 4: ", division(10, 0) === "Error: No se puede dividir por 0");
// console.log("Prueba 5: ", division(7.5, 2.5) === 3);

// Funcion de hallar area de un triangulo

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Pruebas de la funcion areaTriangulo

// console.log("Prueba 1: ", areaTriangulo(8, 4) === 16);
// console.log("Prueba 2: ", areaTriangulo(10, 6) === 30);
// console.log("Prueba 3: ", areaTriangulo(12, 8) === 48);
// console.log("Prueba 4: ", areaTriangulo(5, 7) === 17.5);
// console.log("Prueba 5: ", areaTriangulo(3, 9) === 13.5);