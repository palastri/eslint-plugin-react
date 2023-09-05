const next = {
  extends: [
    "./configs/base",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "jsx-a11y", "prettier"],
  rules: {
    "react-prop-types": "off",
  },
};

export default next;
