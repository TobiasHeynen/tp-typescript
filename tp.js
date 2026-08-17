"use strict";
//ejercicio 2 clases que implementan la interface Animal
class Perro {
    nombre = "Perro";
    gritar() {
        return "ladrido";
    }
}
class Gato {
    nombre = "Gato";
    gritar() {
        return "maullido";
    }
}
class Vaca {
    nombre = "Vaca";
    gritar() {
        return "mugido";
    }
}
//ejercicio 3 function describirAnimal
function describirAnimal(animal) {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}
//ejercicio 4 constantes de las clases
const perro = new Perro();
const gato = new Gato();
const vaca = new Vaca();
//ejercicio 5 llamar a la funcion describirAnimal
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);
//ejercicio 6 enum DiasSemana
var DiasSemana;
(function (DiasSemana) {
    DiasSemana[DiasSemana["lunes"] = 0] = "lunes";
    DiasSemana[DiasSemana["martes"] = 1] = "martes";
    DiasSemana[DiasSemana["miercoles"] = 2] = "miercoles";
    DiasSemana[DiasSemana["jueves"] = 3] = "jueves";
    DiasSemana[DiasSemana["viernes"] = 4] = "viernes";
    DiasSemana[DiasSemana["sabado"] = 5] = "sabado";
    DiasSemana[DiasSemana["domingo"] = 6] = "domingo";
})(DiasSemana || (DiasSemana = {}));
//ejercicio 7 variable que puede ser string o number
let variable = "Messi";
console.log(variable);
variable = 10;
console.log(variable);
class ColaDeFila {
    elementos = [];
    agregar(elemento) {
        this.elementos.push(elemento);
    }
    remover() {
        return this.elementos.shift();
    }
}
//ejercicio 9 crear colas de fila (con tipo declarado)
const filaNumeros = new ColaDeFila();
const filaStrings = new ColaDeFila();
const filaAnimales = new ColaDeFila();
//ejercicio 10 agregar elementos y remover uno de cada fila
filaNumeros.agregar(10);
filaNumeros.agregar(5);
filaNumeros.agregar(9);
filaStrings.agregar("messi");
filaStrings.agregar("numeros");
filaStrings.agregar("animales");
filaAnimales.agregar(perro);
filaAnimales.agregar(gato);
filaAnimales.agregar(vaca);
console.log(filaNumeros);
console.log(filaStrings);
console.log(filaAnimales);
console.log(filaNumeros.remover());
console.log(filaStrings.remover());
console.log(filaAnimales.remover());
