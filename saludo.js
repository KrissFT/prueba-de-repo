var persona = /** @class */ (function () {
    function persona(anioNacimiento, nombre) {
        this.nacimiento = anioNacimiento;
        this.nombre = nombre;
    }
    ;
    persona.prototype.cualEsTuNombre = function () {
        return "Mi nombre es " + this.nombre.split(" ");
    };
    ;
    persona.prototype.cualEsTuEdad = function () {
        var edad = 2022 - this.nacimiento;
        return "Mi edad es " + edad + " años";
    };
    ;
    persona.prototype.cualEsTuGeneracion = function () {
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
    };
    return persona;
}());
;
var fede = new persona(2010, "Federico Fernandez");
console.log(fede.cualEsTuNombre());
console.log(fede.cualEsTuEdad());
console.log(fede.cualEsTuGeneracion());
