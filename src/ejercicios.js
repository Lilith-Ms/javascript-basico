// ==========================================
// EJERCICIOS DE JAVASCRIPT - NIVEL BÁSICO
// ==========================================
// Instrucciones: Consulta el archivo "instrucciones.md" cuando necesites ayuda.
// Total: 35 tests a aprobar
// ==========================================

// ██████  VARIABLES (Tests 1-6) ████████████████████████

// Test 1:
const nuevaString = "Rayo de sol";

// Test 2:
const nuevoNum = 69;

// Test 3:
const nuevoBool = true;

// Test 4:
const nuevaResta = 10 - 5 === 5;

// Test 5:
const nuevaMultiplicacion = 10 * 4 === 40;

// Test 6:
const nuevoModulo = (21 % 5) === 1;

// ██████  FUNCIONES (Tests 7-35) ████████████████████████

// Test 7:
function devolverString(str) {return str;}

// Test 8:
function suma(x, y) {return (x + y);}

// Test 9:
function resta(x, y) {return (x - y)}

// Test 10:
function divide(x, y) {return ( x / y)}

// Test 11:
function multiplica(x, y) {return x * y}

// Test 12:
function sonIguales(x, y) {return x === y}

// Test 13:
function tienenMismaLongitud(str1, str2) {return str1.length === str2.length}

// Test 14:
function menosQueNoventa(num) {return num < 90}

// Test 15:
function mayorQueCincuenta(num) {return num > 50}

// Test 16:
function obtenerResto(x, y) {return x % y}

// Test 17:
function esPar(num) {return num % 2 === 0}

// Test 18:
function esImpar(num) {return num % 2 !== 0}

// Test 19:
function elevarAlCuadrado(num) {return num ** 2}

// Test 20:
function elevarAlCubo(num) {return num ** 3}

// Test 21:
function elevar(num, exponent) {return num ** exponent}

// Test 22:
function redondearNumero(num) {return Math.round (num)}

// Test 23:
function redondearHaciaArriba(num) {return Math.ceil (num)}

// Test 24:
function numeroRandom() {return Math.random ()}

// Test 25:
function esPositivo(numero) { if (numero > 0) return "Es positivo"
  if (numero < 0) return "Es negativo"
  return false}

// Test 26:
function agregarSimboloExclamacion(str) {return (str) + ("!")}

// Test 27:
function combinarNombres(nombre, apellido) {return (nombre + " " + apellido)}

// Test 28:
function obtenerSaludo(nombre) {return `Hola ${nombre}!`;}

// Test 29:
function obtenerAreaRectangulo(alto, ancho) {return (alto * ancho)}

// Test 30:
function retornarPerimetro(lado) {return (lado * 4)}

// Test 31:
function areaDelTriangulo(base, altura) {return (base * altura) / 2}

// Test 32:
function deEuroAdolar(euro) {return euro * 1.20 }

// Tests 33-35 (3 tests en 1 función):
function esVocal(letra) { if (letra.length !== 1) {
    return "Dato incorrecto" }

  letra = letra.toLowerCase()

  if (["a", "e", "i", "o", "u"].includes(letra)) {
    return "Es vocal" }

  return "Dato incorrecto" }
	// Este ejercicio tiene 3 tests internos:
	// Test 33: Verifica si tiene más de una letra
	// Test 34: Verifica si no es vocal
	// Test 35: Verifica si es vocal


// ██████  NO MODIFICAR DESDE AQUÍ ███████████

module.exports = {
	nuevaString,
	nuevoNum,
	nuevoBool,
	nuevaResta,
	nuevaMultiplicacion,
	nuevoModulo,
	devolverString,
	tienenMismaLongitud,
	sonIguales,
	menosQueNoventa,
	mayorQueCincuenta,
	suma,
	resta,
	divide,
	multiplica,
	obtenerResto,
	esPar,
	esImpar,
	elevarAlCuadrado,
	elevarAlCubo,
	elevar,
	redondearNumero,
	redondearHaciaArriba,
	numeroRandom,
	esPositivo,
	agregarSimboloExclamacion,
	combinarNombres,
	obtenerSaludo,
	obtenerAreaRectangulo,
	retornarPerimetro,
	areaDelTriangulo,
	deEuroAdolar,
	esVocal,
};
