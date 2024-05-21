import data from './data/pokemon.json' assert { type: 'json' };

    const POKEMON_TYPES_ICONS = {
    fire: 'bxs-hot',
    flying: 'bx-wind',
    water: 'bx-water',
    grass: 'bx-leaf',
    bug: 'bxs-bug',
    electric: 'bxs-bolt',
    poison: 'bxs-skull',
    fighting: 'bx-error-circle',
    ground: 'bx-tree-alt',
    normal: 'bx-sun',
    psychic: 'bxs-magic-wand',
    ghost: 'bx-ghost'
    }
    const pokemonDatos = data.pokemon;

    function imprimirPokemon(pokemon) {
    const etiquetaTipo = pokemon.type[0]; 
    const clasePokemon = etiquetaTipo.toLowerCase(); 

    const galeria = `
        <div class="pokemon-card ${clasePokemon}">
        <div class="pokemon-card__type-label ${clasePokemon}">
            <i class="pokemon-card__name-icon bx ${POKEMON_TYPES_ICONS[etiquetaTipo]} ${clasePokemon}"></i>
            <span>${etiquetaTipo.toLowerCase()}</span>
        </div>
        <div class="pokemon-card__image">
            <img src="${pokemon.img}" alt="${pokemon.name}" loading="lazy">
        </div>
        <div class="pokemon-card__name">
            <h4>${pokemon.name}</h4>
        </div>
        <p class="pokemon-card__eyebrow">#${pokemon.num}</p>
        </div>
    `;

    return galeria;
    }

    const contenedor = document.querySelector('.cards');

    let tarjetaPokemon = '';
    pokemonDatos.forEach(pokemon => {
    tarjetaPokemon += imprimirPokemon(pokemon);
    
    });

    contenedor.innerHTML = tarjetaPokemon;

    // Finalmente Hito #1 :´)...



    function applyFilters() {
    const filtroTipo = document.getElementById('types').value;
    const filtroDebilidades = document.getElementById('weaknesses').value;

    const pokemonsFiltrados = pokemonDatos.filter(pokemon => {
        const tieneTipo = !filtroTipo || pokemon.type.includes(filtroTipo);
        const tieneDebilidades = !filtroDebilidades || pokemon.weaknesses.includes(filtroDebilidades);

        return tieneTipo && tieneDebilidades;
    });

    mostrarPokemonsFiltrados(pokemonsFiltrados);
    }

    function mostrarPokemonsFiltrados(pokemonsFiltrados) {
    const contenedor = document.querySelector('.cards');
    let tarjetaPokemon = '';

    pokemonsFiltrados.forEach(pokemon => {
        tarjetaPokemon += imprimirPokemon(pokemon);
    });

    contenedor.innerHTML = tarjetaPokemon;
    }

    function cleanFilters() {
    document.getElementById('types').value = '';
    document.getElementById('weaknesses').value = '';
    document.getElementById('order').value = '';
    mostrarPokemonsFiltrados(pokemonDatos);
    }

    const applyFiltersButton = document.querySelector('.filter.buttons button:not(.reverted)');
    const cleanFiltersButton = document.querySelector('.filter.buttons button.reverted');
    applyFiltersButton.addEventListener('click', applyFilters);
    cleanFiltersButton.addEventListener('click', cleanFilters);

    //Hito #2 terminado >:v


    function buscarPokemon() {

        // Obtener el valor del texto ingresado por el usuario
        const searchText = document.querySelector('.search-bar input[type="text"]').value.toLowerCase();
      
        // Filtrar los Pokémon cuyo nombre coincida con el texto de búsqueda
        const pokemonsFiltrados = pokemonDatos.filter(pokemon => pokemon.name.toLowerCase().includes(searchText));
      
        // Mostrar los Pokémon filtrados
        mostrarPokemonsFiltrados(pokemonsFiltrados);
      }
      
      // Agregar un event listener al botón de búsqueda para llamar a la función buscarPokemon
      document.querySelector('.search-bar input[type="button"]').addEventListener('click', buscarPokemon);

      //Hito #3 terminado, ya casi :´) 
      

      function ordenarPokemons(orden) {
        // Obtener el valor del selector de orden
        const ordenSeleccionado = document.getElementById('order').value;
      
        // Ordenar los Pokémon según el nombre
        let pokemonsOrdenados;
        if (ordenSeleccionado === 'ascendant') {
          pokemonsOrdenados = pokemonDatos.slice().sort((a, b) => a.name.localeCompare(b.name));
        } else if (ordenSeleccionado === 'descendant') {
          pokemonsOrdenados = pokemonDatos.slice().sort((a, b) => b.name.localeCompare(a.name));
        }
      
        // Mostrar los Pokémon ordenados
        mostrarPokemonsFiltrados(pokemonsOrdenados);
      }
      
      // Agregar un event listener al selector de orden para llamar a la función ordenarPokemons
      document.getElementById('order').addEventListener('change', ordenarPokemons);
      

      // TODO TERMINADOOOOO!!! LETS FUCKING GO  HITO #4