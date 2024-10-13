// Definición de Clase con ECMAScript5
// function Equipo(serial, marca, modelo) {
//     this.serial = serial
//     this.marca = marca
//     this.modelo = modelo

//     // Creamos método
//     this.mostrarDatos = function() {
//         return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}`
//     }
// }


// Definición de Clase con ECMAScript6, se apega a un lenguaje más moderno
class Equipo { 
    // creamos un constructor que es el método que se va a ejecutar cuando instanciamos una clase (Creación de un Objeto)
    constructor(serial, marca, modelo) {
        this.serial = serial
        this.marca = marca
        this.modelo = modelo
    }
    // Defino método para mostrar en consola
    mostrarDatos(){
        return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}`
    }
}

// Creación de Objeto de Equipo con palabra reservada "new"
const equipo01 = new Equipo("123456", "HP", "HP-001");
// console.log(equipo01)
console.log(equipo01.mostrarDatos())

// HERENCIA
// inicia con clase reservada EXTENDS que es la misma que utiliza Java y PHP
// clase Teclado es hija de clase padre Equipo
class Teclado extends Equipo {
    // creamos constructor, pero aqui tenemos 4 parametros, equipo ya tiene constructor de serial, marca y modelo.
    // podemos recibir todos los parametros de la clase padre o algunos en especificos
    constructor(serial, marca, modelo, tipo = "Alámbrico") {
        // llamo al contructor del padre y la ejecutar sin volver a escribir los otros 3, llamando con la palabra reservada SUPER
        super(serial, marca, modelo) // con SUPER llamo al constructor del padre, y el constructor padre asigna valores a serial, marca y modelo
        this.tipo = tipo
    }
    // Sobrescritura de metodo
    // quiere decir que volvemos a definir, pero le agregamos un cambio en específico
    mostrarDatos(){
        return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}`
    }
}

const teclado01 = new Teclado("654321", "Microsoft", "MIC-001")
// console.log(equipo02)
console.log(teclado01.mostrarDatos())


class Disco extends Equipo {
    constructor(serial, marca, modelo, capacidad) {
        super(serial, marca, modelo)
        this.capacidad = capacidad
    }
}

const disco01 = new Disco("0303456", "WD", "WD-001", "1TB"); 
console.log(disco01) // muestra la capacidad por que captura el dato
console.log(disco01.mostrarDatos()) // no muestra la capacidad por que está ocupando el mostrarDatos de la clase padre Equipo