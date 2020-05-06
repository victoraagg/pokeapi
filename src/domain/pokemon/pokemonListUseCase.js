import UseCase from '../useCase'

/**
 * @implements UseCase
 */
export default class PokemonListUseCae extends UseCase {
    constructor(repository) {
        super(repository)
        this.repository = repository
    }

    execute(query) {

    }
}