"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
console.log(__dirname);
app.use("/", _express.default.static(__dirname + "/../../client/build"));
var _default = app;
exports.default = _default;