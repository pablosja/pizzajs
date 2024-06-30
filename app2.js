const prompt = require('prompt-sync')();

function tomarOrden() {
    const pizza = prompt('And your pizza is ... (e.g., pepperoni): ');
    console.log(`Pizza ${pizza} in preparation`);
    return pizza;
}

function cogerMasa() {
    console.log('Cogiendo la masa');
}

function estirarMasa() {
    console.log('Estirando la masa');
}

function anadirTomate() {
    console.log('Añadiendo tomate');
}

function anadirMozzarella() {
    console.log('Añadiendo mozzarella');
}

function anadirIngredientePrincipal(pizza) {
    console.log(`Añadiendo ${pizza}`);
}

function hornear() {
    console.log('Horneando la pizza');
}

function pizzaLista() {
    console.log('Pizza ready');
}

function entregarPizza() {
    console.log('Pizza entregada');
}

function prepararPizza() {
    const pizza = tomarOrden();
    cogerMasa();
    estirarMasa();
    anadirTomate();
    anadirMozzarella();
    anadirIngredientePrincipal(pizza);
    hornear();
    pizzaLista();
    entregarPizza();
}

prepararPizza();
