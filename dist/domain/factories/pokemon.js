"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pokemonListUseCase = _interopRequireDefault(require("../pokemon/pokemonListUseCase"));

var _apiPokemonRepository = _interopRequireDefault(require("../pokemon/apiPokemonRepository"));

var _pokemonEntity = _interopRequireDefault(require("../pokemon/pokemonEntity"));

var _spriteEntity = _interopRequireDefault(require("../pokemon/spriteEntity"));

var _superagent = _interopRequireDefault(require("superagent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PokemonFactory = /*#__PURE__*/function () {
  function PokemonFactory() {
    _classCallCheck(this, PokemonFactory);
  }

  _createClass(PokemonFactory, null, [{
    key: "pokemonListUseCase",
    value: function pokemonListUseCase() {
      return new _pokemonListUseCase["default"]({
        repository: PokemonFactory.apiPokemonRepository()
      });
    }
  }, {
    key: "apiPokemonRepository",
    value: function apiPokemonRepository() {
      return new _apiPokemonRepository["default"](PokemonFactory.fetcher());
    }
  }, {
    key: "fetcher",
    value: function fetcher() {
      return _superagent["default"];
    }
  }, {
    key: "pokemonEntity",
    value: function pokemonEntity(_ref) {
      var name = _ref.name,
          resource_uri = _ref.resource_uri,
          sprites = _ref.sprites;
      return new _pokemonEntity["default"]({
        name: name,
        resource_uri: resource_uri,
        sprites: sprites && sprites.map(PokemonFactory.spriteEntity)
      });
    }
  }, {
    key: "spriteEntity",
    value: function spriteEntity(name, resource_uri, image, pokemon) {
      return new _spriteEntity["default"]({
        id: id,
        resource_uri: resource_uri,
        image: image,
        pokemon: PokemonFactory.pokemonEntity(pokemon)
      });
    }
  }]);

  return PokemonFactory;
}();

exports["default"] = PokemonFactory;