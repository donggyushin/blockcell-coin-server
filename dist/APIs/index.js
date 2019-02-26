"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../Routes/routes"));

var _files = _interopRequireDefault(require("./files"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express.default.Router();

router.use(_routes.default.files, _files.default);
var _default = router;
exports.default = _default;