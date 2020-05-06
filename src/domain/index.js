import PokemonFactory from './factories/pokemon'

class Pokedex {
    constructor() {
        this.deps = new Map()
        this.deps.set('pokemon_list_use_case', PokemonFactory.pokemonListUseCase())
    }

    get(key) {
        if(this.deps.has(key)){
            return this.deps.get(key)
        }
        console.warn(`Service ${key} is not implemented in the current version of the domain`)
    }
}

export default new Pokedex()