# eslint-plugin-react

[![Build Status](https://github.com/palastri/eslint-plugin-react/workflows/production.yml/badge.svg?branch=main)](https://github.com/palastri/eslint-plugin-react/actions/workflows/production.yml)

## Installation

```bash
yarn add --dev eslint @palastri/eslint-plugin-react
```

## Usage

Add `@palastri/eslint-plugin-react` to the plugins section of your `.eslintrc` configuration file. You
can omit the `eslint-plugin-` prefix:

## TODO

```json
{
  "extends": ["@palastri/react/recommended"],
  "plugins": ["@palastri/react"]
}
```

## Shareable configurations

### Recommended

This plugin exports a recommended configuration that enforces good testing practices.
To enable this configuration use the `extends` property in your `.eslintrc` config file:

```json
{
  "extends": ["plugin:@palastri/react/recommended"]
}
```

### Stylistic

This plugin also exports a configuration named `stylistic`, which adds some stylistic rules. The rules considered to be best practice for modern TypeScript codebase, but that do not impact program logic.
To enable this configuration use the `extends` property in your `.eslintrc` config file:

```json
{
  "extends": ["plugin:@palastri/react/stylistic"]
}
```

## Recommended plugin ruleset

This plugin includes the following plugins:

- [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
- [eslint-plugin-jsx-a11y](https://github.com/jsx-eslint/eslint-plugin-jsx-a11y)
- [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

One or more default rules from those plugins are overridden such as:

| Name                                 | Description                                                       | Rules                                                                                    |
| :----------------------------------- | :---------------------------------------------------------------- | :--------------------------------------------------------------------------------------- |
| `@typescript-eslint/array-type`      | Require consistently using either `T[]` or `Array<T>` for arrays. | `["error", { default: "array-simple" }]`                                                 |
| `@typescript-eslint/member-ordering` | Require a consistent member declaration order.                    | `["error", { default: { optionallyOrder: "required-first", order: "alphabetically" } }]` |
| `react/prop-types`                   | Disallow missing props validation in a React component definition | `"off"`                                                                                  |
