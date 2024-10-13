// Añadimos palabra reservada EXPORT
export class Equipo { 
    constructor(serial, marca, modelo) {
        this.serial = serial
        this.marca = marca
        this.modelo = modelo
    }
    mostrarDatos(){
        return `Serial: ${this.serial}, Marca: ${this.marca}, Modelo: ${this.modelo}`
    }
}