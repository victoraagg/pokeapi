"use strict";

var _card = _interopRequireDefault(require("./components/card"));

var _domain = _interopRequireDefault(require("./domain"));

require("./index.scss");

var _pokemonListUseCase = _interopRequireDefault(require("./domain/pokemon/pokemonListUseCase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

_domain["default"].get('pokemon_list_use_case').execute().then(function (pokemon) {
  return _pokemonListUseCase["default"].map(function (p) {
    return new _card["default"](p);
  });
}).then(function (cards) {
  var _iterator = _createForOfIteratorHelper(cards),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var card = _step.value;
      document.body.appendChild(card.render());
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});