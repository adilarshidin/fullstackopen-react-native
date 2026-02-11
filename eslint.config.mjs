import { defineConfig } from "eslint/config";
import react from "eslint-plugin-react";
import reactNative from "eslint-plugin-react-native";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([{
    files: ["./src/**/*.js", "./src/**/*.jsx", "./App.js"],
    extends: compat.extends("eslint:recommended", "plugin:react/recommended"),

    plugins: {
        react,
        "react-native": reactNative,
    },

    languageOptions: {
        globals: {
            ...js.environments.browser.globals,
            ...reactNative.environments["react-native"]["react-native"],
        }
    },

    settings: {
        react: {
            version: "detect",
        },
    },

    rules: {
        "react/prop-types": "off",
        "react/react-in-jsx-scope": "off",
        "semi": ["error"],
        eqeqeq: "off",
        "no-unused-vars": "error",
        "prefer-const": ["error", { ignoreReadBeforeAssign: true }],
    },
}]);
