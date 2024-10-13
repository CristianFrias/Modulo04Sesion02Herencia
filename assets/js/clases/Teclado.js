// Necesito tener referencia de Equipo, ya que no existe en este archivo lo importamos con IMPORT
import { Equipo } from "./Equipo.js"

export class Teclado extends Equipo {
    constructor(serial, marca, modelo, tipo = "Alámbrico") {
        super(serial, marca, modelo)
        this.tipo = tipo
    }
    mostrarDatos(){
        return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}, Tipo: ${this.tipo}`
    }
}