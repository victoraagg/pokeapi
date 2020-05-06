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
var HtmlComponent = /*#__PURE__*/function () {
  function HtmlComponent() {
    _classCallCheck(this, HtmlComponent);
  }

  _createClass(HtmlComponent, [{
    key: "render",
    value: function render() {
      throw new Error('You must implement the render() method');
    }
  }]);

  return HtmlComponent;
}();

exports["default"] = HtmlComponent;