"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
// Entry
var FILES = "/files"; // Files

var DOWNLOAD = "/download/:filename";
var routes = {
  files: FILES,
  download: DOWNLOAD
};
var _default = routes;
exports.default = _default;