const levadura = 30;
const agua = 2.5;
const aceite = 2;
const harina = 'Harina de fuerza';
const sal = 1;
const porciones = 4;
const tiempoReposo = 45;
const tiempoHorneado = 10;

function mezclarLevadura() {
    console.log(`mezclar ${levadura} gramos de levadura fresca con ${agua} tazas de agua tibia`);
}

function anadirAceite() {
    console.log(`añadir ${aceite} cucharadas soperas de aceite de oliva`);
}

function anadirHarinaYSal() {
    console.log(`añadir ${harina}`);
    console.log(`añadir ${sal} cucharadita de sal fina`);
}

function amasar() {
    console.log('amasar bien hasta que deje de ser pegajosa');
}

function darFormaMasa() {
    console.log(`darle forma a la masa para ${porciones} pizzas`);
    console.log(`${porciones} porciones obtenidas`);
}

function prepararBase() {
    console.log('base para 1 pizza');
    console.log(`Dejar la base para 1 pizza reposar durante ${tiempoReposo} min`);
    console.log('Base con forma circular obtenida');
}

function añadirIngredientes() {
    console.log('añadido Salsa de tomate');
    console.log('añadido Mozzarella');
    console.log('añadido Pepperoni');
    console.log('añadidas 4 Aceitunas Negras');
}

function hornearPizza() {
    console.log(`Horneando la pizza durante ${tiempoHorneado} min`);
    console.log('Pizza lista');
}

function entregarPizza() {
    console.log('Pizza Entregada');
}

mezclarLevadura();
anadirAceite();
anadirHarinaYSal();
amasar();
darFormaMasa();
prepararBase();
añadirIngredientes();
hornearPizza();
entregarPizza();
