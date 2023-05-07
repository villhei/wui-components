// Replace ?raw in paths for jest file resolution
module.exports = (path, options) => {
  return options.defaultResolver(path.replace("?raw", ""), options);
};
