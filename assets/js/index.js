(function () {
    const API_URL = 'https://pokeapi.co/api/v2/pokemon/';
    const POKEMON_INPUT = document.querySelector('#pokemon');
    const SEARCH_BUTTON = document.querySelector('#search');
    const HEIGHT_INPUT = document.querySelector('#height');
    const WEIGHT_INPUT = document.querySelector('#weight');
    const POKEMON_SCREEN = document.querySelector('#pokemon-image');
    const POKEMON_SCREEN_ERROR = document.querySelector('#pokemon-screen-error-msj');
    const POKEMON_HP = document.querySelector('#pokemon-hp');
    const POKEMON_ATK = document.querySelector('#pokemon-atk');
    const POKEMON_DEF = document.querySelector('#pokemon-def');
    const POKEMON_SPD = document.querySelector('#pokemon-spd');
    const POKEMON_SAT = document.querySelector('#pokemon-sat');
    const POKEMON_SDF = document.querySelector('#pokemon-sdf');


    SEARCH_BUTTON.addEventListener('click', () => {
        if (!POKEMON_SCREEN_ERROR.classList.contains('hide-msj')) {
            POKEMON_SCREEN_ERROR.classList.toggle('hide-msj');
        }

        let pokemonsName = POKEMON_INPUT.value;

        fetch(`${API_URL}${pokemonsName.toLowerCase()}`)
            .then((response) => response.json())
            .catch(error => showErrorMsg(error))
            .then((pokemon) => {
                HEIGHT_INPUT.textContent = "Altura: " + (pokemon.height * 30.48).toFixed(2) + "cm";
                WEIGHT_INPUT.textContent = "Peso: " + (pokemon.weight * 0.453592).toFixed(2) + "Kg";
                POKEMON_SCREEN.src = pokemon.sprites['front_default'];
                POKEMON_HP.textContent = pokemon.stats[0]['base_stat'];
                POKEMON_ATK.textContent = pokemon.stats[1]['base_stat'];
                POKEMON_DEF.textContent = pokemon.stats[2]['base_stat'];
                POKEMON_SPD.textContent = pokemon.stats[5]['base_stat'];
                POKEMON_SAT.textContent = pokemon.stats[3]['base_stat'];
                POKEMON_SDF.textContent = pokemon.stats[4]['base_stat'];
            });
        POKEMON_INPUT.value = "";
    });

    function showErrorMsg(msj) {
        POKEMON_SCREEN_ERROR.classList.toggle('hide-msj');
        console.log("Error pokemon: " + msj);
        console.log(POKEMON_SCREEN_ERROR.classList);
        POKEMON_SCREEN.src = "";
        POKEMON_HP.textContent = "00";
        POKEMON_ATK.textContent = "00";
        POKEMON_DEF.textContent = "00";
        POKEMON_SPD.textContent = "00";
        POKEMON_SAT.textContent = "00";
        POKEMON_SDF.textContent = "00";
        HEIGHT_INPUT.textContent = "Altura: 00cm";
        WEIGHT_INPUT.textContent = "Peso: 00Kg";

    }


})();