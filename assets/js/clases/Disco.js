// Necesito tener referencia de Equipo, ya que no existe en este archivo lo importamos con IMPORT
import { Equipo } from "./Equipo.js"

export class Disco extends Equipo {
    constructor(serial, marca, modelo, capacidad) {
        super(serial, marca, modelo)
        this.capacidad = capacidad
    }
}