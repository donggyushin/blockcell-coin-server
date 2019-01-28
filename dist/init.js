"use strict";

var _app = _interopRequireDefault(require("./app"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv.default.config();

var PORT = 3000;
var env = process.env.NODE_ENV || "dev";

if (env !== "dev") {
  PORT = process.env.PORT;
}

var handleListen = function handleListen() {
  console.log("blockcell coin server is listening on ".concat(PORT));
};

_app.default.listen(3000, handleListen);