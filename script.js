// Funciones de JavaScript
function invertirCadena(cadena) {
    return cadena.split('').reverse().join('');
}

function esNumeroPrimo(numero) {
    if (numero <= 1) {
        return "No, no es primo";
    }
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return "No, no es primo";
        }
    }
    return "Sí, es primo";
}

function eliminarDuplicados(arreglo) {
    return [...new Set(arreglo)];
}

function calcularFactorial(numero) {
    if (isNaN(numero)) {
        return "Ingresa un número válido";
    }
    if (numero < 0) {
        return "No se puede calcular el factorial de un número negativo";
    }
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

function contarVocales(cadena) {
    const vocales = cadena.match(/[aeiouAEIOU]/g);
    return vocales ? vocales.length : 0;
}

function sumarArreglo(arreglo) {
    return arreglo.reduce((acc, curr) => acc + curr, 0);
}

function buscarMaximo(arreglo) {
    return Math.max(...arreglo);
}

const actividades = [
    { nombre: 'Invertir una Cadena', funcion: invertirCadena, argumentos: [''], origen: 'cadena', formato: 'Ingrese una cadena de texto' },
    { nombre: 'Número Primo', funcion: esNumeroPrimo, argumentos: [''], origen: 'número', formato: 'Ingrese un número entero' },
    { nombre: 'Eliminar Duplicados en un Arreglo', funcion: eliminarDuplicados, argumentos: [[]], origen: 'arreglo', formato: 'Ingrese números separados por comas (ej: 1, 2, 3, 4)' },
    { nombre: 'Factorial de un Número', funcion: calcularFactorial, argumentos: [''], origen: 'número', formato: 'Ingrese un número entero' },
    { nombre: 'Contar Vocales', funcion: contarVocales, argumentos: [''], origen: 'cadena', formato: 'Ingrese una cadena de texto' },
    { nombre: 'Sumar los Números de un Arreglo', funcion: sumarArreglo, argumentos: [[]], origen: 'arreglo', formato: 'Ingrese números separados por comas (ej: 1, 2, 3, 4)' },
    { nombre: 'Buscar el Máximo en un Arreglo', funcion: buscarMaximo, argumentos: [[]], origen: 'arreglo', formato: 'Ingrese números separados por comas (ej: 1, 2, 3, 4)' }
];

const listaActividades = document.getElementById('actividades-lista');
actividades.forEach(actividad => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <p>${actividad.nombre}</p>
        <span>Formato: ${actividad.formato}</span><br>
        <input type="text" placeholder="${actividad.formato}" id="input-${actividad.nombre}">
        <button onclick="realizarActividad('${actividad.nombre}', '${actividad.origen}')">Calcular</button>
        <p id="resultado-${actividad.nombre}"></p>
    `;
    listaActividades.appendChild(listItem);
});

function realizarActividad(nombre, origen) {
    const input = document.getElementById(`input-${nombre}`).value;
    let argumentos;
    if (origen === 'cadena') {
        argumentos = [input];
    } else if (origen === 'número') {
        argumentos = [parseInt(input)];
    } else if (origen === 'arreglo') {
        argumentos = input.split(',').map(num => parseInt(num.trim()));
    }

    const actividad = actividades.find(act => act.nombre === nombre);
    const resultado = actividad.funcion(...argumentos);
    document.getElementById(`resultado-${nombre}`).textContent = `Resultado: ${resultado}`;
}

 