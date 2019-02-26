"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var PORT = 8001;

var handleListen = function handleListen() {
  console.log("blockcell coin server is listening on ".concat(PORT));
};

_app.default.listen(PORT, handleListen);