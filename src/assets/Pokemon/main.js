function convert() {
    var newPokemon = [];

    for (let i in pokemon) {
        //console.log(i);
        var p = pokemon[i];

        p.name = pokemonde[i];

        if (p.id <= 151) {
            p.generation = 1;
        } else if (p.id <= 251) {
            p.generation = 2;
        } else if (p.id <= 386) {
            p.generation = 3;
        } else if (p.id <= 493) {
            p.generation = 4;
        } else if (p.id <= 649) {
            p.generation = 5;
        } else if (p.id <= 721) {
            p.generation = 6;
        } else if (p.id <= 809) {
            p.generation = 7;
        } else if (p.id <= 917) {
            p.generation = 8;
        }

        newPokemon.push(p);
    }

    console.log(newPokemon);
}