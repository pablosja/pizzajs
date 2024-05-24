console.log('we are online')

let steps = {
stage01: 'Tener los ingredientes de la masa: harina, sal, agua, aceite y levadura.',
stage02: 'Mezclar levadura con agua.',
stage03: 'Añadir la harina y la sal a la mezcla.',
stage04: 'Añadir el agua y el aceite a la mezcla.',
stage05: 'Amasar hasta que quede una masa uniforme y no sea pegajosa.',
stage06: 'Dejar reposar la masa en un recipiente.',
stage07: 'Cuando la masa haya reposado el tiempo necesario, darle forma de disco.',
stage08: 'Pelar tomate, escaldarlo y triturarlo.',
stage09: 'Extender el tomate triturado sobre el disco de masa.',
stage10: 'Añadirle mozzarella recién rallada a la pizza.',
stage11: 'Añadirle taquitos de bacon a la pizza.',
stage12: 'Añadirle cebolla a la pizza.',
stage13: 'Precalentar el horno a 200 º C.',
stage14: 'Cuando el horno esté listo, introducir la pizza en el horno.',
stage15: 'La pizza ha de estar 15 minutos en el horno.',
stage16: 'Extraer la pizza del horno.',
stage17: 'Ya tienes tu pizza lista para servir y comer.',
}

for (const property in steps) {
    console.log(property + ': ' +[property])
}