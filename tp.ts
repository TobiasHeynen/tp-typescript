//ejercicio 1 interface Animal
interface Animal {
    nombre: string;
    gritar(): string;
}

//ejercicio 2 clases que implementan la interface Animal
class Perro implements Animal {
    nombre: string = "Perro";
    gritar(): string {
        return "ladrido";
    }
}

class Gato implements Animal {
    nombre: string = "Gato";
    gritar(): string {
        return "maullido";
    }
}

class Vaca implements Animal {
    nombre: string = "Vaca";
    gritar(): string {
        return "mugido";
    }
}

//ejercicio 3 function describirAnimal
function describirAnimal(animal: Animal): void {
    console.log(`El animal ${animal.nombre} hace ${animal.gritar()}`);
}

//ejercicio 4 constantes de las clases
const perro: Animal = new Perro();
const gato: Animal = new Gato();
const vaca: Animal = new Vaca();

//ejercicio 5 llamar a la funcion describirAnimal
describirAnimal(perro);
describirAnimal(gato);
describirAnimal(vaca);

//ejercicio 6 enum DiasSemana
enum DiasSemana {
"lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"
}

//ejercicio 7 variable que puede ser string o number
let variable: string | number = "Messi";
console.log(variable);

variable = 10;
console.log(variable);

//ejercicio 8 clase generica
interface Fila<T> {
    agregar(elemento: T): void;
    remover(): T | undefined;
}

class ColaDeFila<T> implements Fila<T> {
    private elementos: T[] = [];

    agregar(elemento: T): void {
        this.elementos.push(elemento);
    }

    remover(): T | undefined {
        return this.elementos.shift();
    }
}

//ejercicio 9 crear colas de fila (con tipo declarado)
const filaNumeros: Fila<number> = new ColaDeFila<number>();
const filaStrings: Fila<string> = new ColaDeFila<string>();
const filaAnimales: Fila<Animal> = new ColaDeFila<Animal>();

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