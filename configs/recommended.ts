const recommended = {
  extends: [
    "./configs/base",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "react-hooks", "jsx-a11y", "prettier"],
  rules: {
    "react/prop-types": "off",
  },
};

export default recommended;
