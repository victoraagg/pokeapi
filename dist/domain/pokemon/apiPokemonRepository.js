"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pokemonRepository = _interopRequireDefault(require("./pokemonRepository"));

var _pokemon = _interopRequireDefault(require("../factories/pokemon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * @implements PokemonRepository
 */
var ApiPokemonRepository = /*#__PURE__*/function (_PokemonRepository) {
  _inherits(ApiPokemonRepository, _PokemonRepository);

  var _super = _createSuper(ApiPokemonRepository);

  function ApiPokemonRepository(fetcher) {
    var _this;

    _classCallCheck(this, ApiPokemonRepository);

    _this = _super.call(this, fetcher);
    _this._fetcher = fetcher;
    return _this;
  }

  _createClass(ApiPokemonRepository, [{
    key: "list",
    value: function list(query) {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        _this2._fetcher.get('https://pokeapi.co/api/v2/pokemon').query({
          limit: 10
        }).end(function (err, resp) {
          if (err) {
            reject(err);
            return;
          }

          try {
            resolve(JSON.parse(resp.text).objects.map(_pokemon["default"].pokemonEntity));
          } catch (err) {
            reject(err);
          }
        });
      });
    }
  }, {
    key: "sprite",
    value: function sprite(resource_uri) {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        _this3._fetcher.get("https://pokeapi.co".concat(resource_uri)).end(function (err, resp) {
          if (err) {
            reject(err);
            return;
          }

          try {
            resolve(_pokemon["default"].spriteEntity(JSON.parse(resp.text)));
          } catch (err) {
            reject(err);
          }
        });
      });
    }
  }]);

  return ApiPokemonRepository;
}(_pokemonRepository["default"]);

exports["default"] = ApiPokemonRepository;