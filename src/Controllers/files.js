export const downloadFile = (req, res) => {
  const {
    params: { filename }
  } = req;
  var file = __dirname + `/../Static/Images/${filename}`;
  res.download(file);
};
