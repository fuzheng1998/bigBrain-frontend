module.exports = {
    extends: [
        'airbnb',
        'airbnb-typescript',
        'plugin:react/jsx-runtime',
    ],
    ignorePatterns: [
        '*.js',
        'node_modules/'
    ],
    parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        'no-restricted-exports': 'off',
        "react/require-default-props": [
            "error",
            {
                functions: "defaultArguments"
            }
        ],
    }
};
