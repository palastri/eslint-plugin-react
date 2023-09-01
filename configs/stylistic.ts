const stylistic = {
  extends: ["./configs/base", "plugin:@typescript-eslint/stylistic"],
  rules: {
    "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
    "@typescript-eslint/member-ordering": [
      "error",
      {
        default: {
          optionalityOrder: "required-first",
          order: "alphabetically",
        },
      },
    ],
  },
};

export default stylistic;
