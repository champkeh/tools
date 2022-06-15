const { join } = require("path")

function resolve(dir) {
  return join(__dirname, dir)
}

module.exports = {
  resolve: {
    extensions: [".ts", ".js", ".vue", ".json"],
    alias: {
      "@": resolve("src"),
    },
  },
}
