console.log('we are online')

let steps = {
"step01" = "Tener los ingredientes de la masa: harina, sal, agua, aceite y levadura."
"step02" = "Mezclar levadura con agua."
"step03" = "Añadir la harina y la sal a la mezcla."
"step04" = "Añadir el agua y el aceite a la mezcla."
"step05" = "Amasar hasta que quede una masa uniforme y no sea pegajosa."
"step06" = "Dejar reposar la masa en un recipiente."
"step07" = "Cuando la masa haya reposado el tiempo necesario, darle forma de disco."
"step08" = "Pelar tomate, escaldarlo y triturarlo."
"step09" = "Extender el tomate triturado sobre el disco de masa."
"step10" = "Añadirle mozzarella recién rallada a la pizza."
"step11" = "Añadirle taquitos de bacon a la pizza."
"step12" = "Añadirle cebolla a la pizza."
"step13" = "Precalentar el horno a 200 º C.".
"step14" = "Cuando el horno esté listo, introducir la pizza en el horno."
"step15" = "La pizza ha de estar 15 minutos en el horno."
"step16" = "Extraer la pizza del horno."
"step17" = "Añadir un poco de salsa barbacoa tipo cajún a temperatura ambiente sobre la pizza."
"step18" = "Ya tienes tu pizza lista para servir y comer."
}

function imprimirSteps(steps) {
    for (let [nombre, valor] of Object.entries(steps)) {
        console.log(`${nombre}: ${valor}`);
        console.log(`${nombre}: ${valor}`);
        console.log(`${nombre}: ${valor}`);
        console.log(`${nombre}: ${valor}`);
        console.log(`${nombre}: ${valor}`);
        console.log(`${nombre}: ${valor}`);
        console.log(`${nombre}: ${valor}`);
        
        imprimirSteps(steps);/*

        function imprimir() {
            console.log(steps)
        }
        imprimir()