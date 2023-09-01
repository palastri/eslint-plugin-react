export = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["plugin:import/recommended", "plugin:import/typescript", "eslint:recommended", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        project: ["tsconfig.json"],
        sourceType: "module",
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  plugins: ["import", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: true,
      typescript: true,
    },
    react: {
      version: "detect",
    },
  },
};
