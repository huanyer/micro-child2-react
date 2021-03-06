const { merge }  = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "react-app",
    projectName: "react-app",
    webpackConfigEnv: {...webpackConfigEnv,
    standalone: true,
    },
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output:{
      library: "child-app_app",
    }
  });
};
