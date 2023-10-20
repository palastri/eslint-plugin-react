import { config, resolves } from "./base";

resolves([
  ["eslint-plugin-import", "eslint-plugin-import"],
  ["eslint-plugin-react", "eslint-plugin-react"],
  ["eslint-plugin-jsx-a11y", "eslint-plugin-jsx-a11y"],
  ["eslint-plugin-prettier", "eslint-plugin-prettier"],
]);

const next = {
  ...config,
  extends: [
    ...config.extends,
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  rules: {
    "react-prop-types": "off",
  },
};

export default next;
