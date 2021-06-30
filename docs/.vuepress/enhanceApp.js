import upperFirst from "lodash/upperFirst";
import camelCase from "lodash/camelCase";

// @see https://vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
// async function is also supported, too
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData, // site metadata
  isServer, // is this enhancement applied in server-rendering or client
}) => {
  // ...apply enhancements to the app
  console.log("im client");
  // @see https://vuejs.org/v2/guide/components-registration.html#Automatic-Global-Registration-of-Base-Components
  const requireComponent = require.context(
    // The relative path of the components folder
    "../../src/components/",
    // Whether or not to look in subfolders
    true,
    // The regular expression used to match base component filenames
    /[A-Z]\w+\.(vue|js)$/
  );

  requireComponent.keys().forEach((fileName) => {
    // Get component config
    const componentConfig = requireComponent(fileName);

    // Get PascalCase name of component
    const componentName = upperFirst(
      camelCase(
        // Gets the file name regardless of folder depth
        fileName
          .split("/")
          .pop()
          .replace(/\.\w+$/, "")
      )
    );

    // Register component globally
    Vue.component(
      componentName,
      // Look for the component options on `.default`, which will
      // exist if the component was exported with `export default`,
      // otherwise fall back to module's root.
      componentConfig.default || componentConfig
    );
  });
};
