// https://vue-styleguidist.github.io/docs/docgen-cli.html#config
module.exports = {
  componentsRoot: "src/components", // the folder where CLI will start searching for components.
  components: "**/[A-Z]*.vue", // the glob to define what files should be documented as components (relative to componentRoot)
  outDir: "docs/js-docs", // folder to save components docs in (relative to the current working directory)
};
