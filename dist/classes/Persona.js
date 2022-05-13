"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.persona = void 0;
class persona {
    constructor(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    cualEsTuNombre() {
        return "Mi nombre es " + this.nombre.split(" ");
    }
    ;
    cualEsTuEdad() {
        let edad = 2022 - this.nacimiento;
        return "Mi edad es " + edad + " años";
    }
    ;
    cualEsTuGeneracion() {
        if (this.nacimiento < 1975) {
            return "Soy un Baby Boomer";
        }
        if (this.nacimiento >= 1975 && this.nacimiento <= 1999) {
            return "Soy un Millenial";
        }
        if (this.nacimiento > 1999 && this.nacimiento < 2010) {
            return "Soy un Centenial";
        }
        if (this.nacimiento >= 2010) {
            return "Soy un bebé parlante";
        }
    }
}
exports.persona = persona;
;
