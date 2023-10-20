export const config = {
  env: {
    browser: true,
    node: true,
  },
  extends: ["eslint:recommended", "plugin:import/recommended", "plugin:import/typescript", "plugin:@typescript-eslint/recommended"],
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
  settings: {
    "import/parsers": {
      [require.resolve("@typescript-eslint/parser")]: [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      [require.resolve("eslint-import-resolver-node")]: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
      [require.resolve("eslint-import-resolver-typescript")]: {
        alwaysTryTypes: true,
      },
    },
    react: {
      version: "detect",
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-var-requires
const mod = require("module");

export const resolves = (plugins: Array<[string, string]>): void => {
  const keeps: string[] = [];
  const sorted: string[] = [];
  const cwd = process.cwd().replace(/\\/g, "/");
  const originalPaths = require.resolve.paths("eslint-plugin-import") || [];

  for (let index = 0; index < originalPaths.length; index++) {
    const current = originalPaths[index];
    if (current.replace(/\\/g, "/").startsWith(cwd)) {
      sorted.push(current);
    } else {
      keeps.unshift(current);
    }
  }

  sorted.push(...keeps);

  const properties = new Map(plugins.map(([request, replacement]) => [request, require.resolve(replacement, { paths: sorted })]));

  const resolveFilename = mod._resolveFilename;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mod._resolveFilename = (request: string, parent: any, isMain: any, options: any) => {
    const toResolve = properties.get(request);
    if (toResolve) {
      request = toResolve;
    }
    return resolveFilename.call(mod, request, parent, isMain, options);
  };
};
