import Card from './components/card'
import Pokedex from './domain'
import './index.scss'
import PokemonListUseCae from './domain/pokemon/pokemonListUseCase'

Pokedex.get('pokemon_list_use_case')
    .execute()
    .then((pokemon) => {
        return PokemonListUseCae.map(p => new Card(p))
    })
    .then((cards) => {
        for(let card of cards) {
            document.body.appendChild(card.render())
        }
    })