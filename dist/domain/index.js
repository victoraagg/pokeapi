"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pokemon = _interopRequireDefault(require("./factories/pokemon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Pokedex = /*#__PURE__*/function () {
  function Pokedex() {
    _classCallCheck(this, Pokedex);

    this.deps = new Map();
    this.deps.set('pokemon_list_use_case', _pokemon["default"].pokemonListUseCase());
  }

  _createClass(Pokedex, [{
    key: "get",
    value: function get(key) {
      if (this.deps.has(key)) {
        return this.deps.get(key);
      }

      console.warn("Service ".concat(key, " is not implemented in the current version of the domain"));
    }
  }]);

  return Pokedex;
}();

var _default = new Pokedex();

exports["default"] = _default;