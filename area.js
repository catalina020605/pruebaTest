// Funcion de hallar area de un triangulo

function areaTriangulo(base, altura) {
    return (base * altura) / '2';
}

module.exports = areaTriangulo;

//Pruebas de la funcion areaTriangulo

// console.log("Prueba 1: ", areaTriangulo(8, 4) === 16);
// console.log("Prueba 2: ", areaTriangulo(10, 6) === 30);
// console.log("Prueba 3: ", areaTriangulo(12, 8) === 48);
// console.log("Prueba 4: ", areaTriangulo(5, 7) === 17.5);
// console.log("Prueba 5: ", areaTriangulo(3, 9) === 13.5);