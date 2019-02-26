"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.downloadFile = void 0;

var downloadFile = function downloadFile(req, res) {
  var filename = req.params.filename;

  var file = __dirname + "/../Static/Images/".concat(filename);

  res.download(file);
};

exports.downloadFile = downloadFile;