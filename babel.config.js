module.exports = (api) => {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
          alias: {
            tests: ["./tests/"],
            "@components": "./src/components",
            "@assets": "./src/assets",
            "@constants": "./src/constants",
            "@theme": "./src/theme",
            "@hooks": "./src/hooks",
            "@contexts": "./src/contexts",
            "@queries": "./src/queries",
            "@providers": "./src/providers",
            "@store": "./src/store",
            "@screens": "./src/screens",
            "@services": "./src/services",
            "@utils": "./src/utils",
            "@config": "./src/config",
            "@data": "./src/data",
            "@lib": "./src/lib",
            "@types": "./src/types",
            "@traduction": "./src/traduction",
          },
        },
      ],
    ],
  };
};
