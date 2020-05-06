"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * @interface
 */
var PokemonRepository = /*#__PURE__*/function () {
  function PokemonRepository() {
    _classCallCheck(this, PokemonRepository);
  }

  _createClass(PokemonRepository, [{
    key: "list",
    value: function list() {
      throw new Error('PokemonRepository#list must be implemented');
    }
  }, {
    key: "sprite",
    value: function sprite(resource_uri) {
      throw new Error('PokemonRepository#sprite must be implemented');
    }
  }]);

  return PokemonRepository;
}();

exports["default"] = PokemonRepository;