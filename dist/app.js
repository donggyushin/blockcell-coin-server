"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _APIs = _interopRequireDefault(require("./APIs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express.default)();
app.use("/", _express.default.static(__dirname + "/../../client/build"));
app.use("/static", _express.default.static(__dirname + "/Static"));
app.use("/api", _APIs.default);
var _default = app;
exports.default = _default;