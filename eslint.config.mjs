import js from '@eslint/js';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import importXPlugin from 'eslint-plugin-import-x';
import mantinePlugin from 'eslint-config-mantine';
import vitest from 'eslint-plugin-vitest';

const eslintConfig = [
    js.configs.recommended,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                ecmaVersion: 'latest',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                React: 'readonly',
                JSX: 'readonly',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            react: reactPlugin,
            'react-hooks': reactHooksPlugin,
            'jsx-a11y': jsxA11yPlugin,
            'import-x': importXPlugin,
            mantine: mantinePlugin,
            vitest,
        },
        settings: {
            react: {
                version: 'detect',
            },
            'import-x/resolver': {
                typescript: {
                    alwaysTryTypes: true,
                    project: './tsconfig.json',
                },
                node: {
                    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
                },
            },
        },
        rules: {
            ...vitest.configs.recommended.rules,
            'array-callback-return': 'off',
            'consistent-return': 'error',
            curly: 'error',
            'default-case': [
                'error',
                {
                    commentPattern: '^no default$',
                },
            ],
            'dot-notation': [
                'error',
                {
                    allowKeywords: true,
                },
            ],
            eqeqeq: ['error', 'always'],
            'no-eq-null': 'error',
            'no-eval': 'error',
            'no-extra-bind': 'error',
            'no-floating-decimal': 'error',
            'no-return-assign': ['error', 'always'],
            'no-throw-literal': 'error',
            'no-useless-call': 'error',
            yoda: 'error',
            'no-await-in-loop': 'error',
            'no-template-curly-in-string': 'error',
            'arrow-spacing': [
                'error',
                {
                    before: true,
                    after: true,
                },
            ],
            'no-useless-computed-key': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': [
                'error',
                {
                    ignoreDestructuring: false,
                    ignoreImport: false,
                    ignoreExport: false,
                },
            ],
            'no-var': 'error',
            'padding-line-between-statements': [
                'error',
                // Require blank lines after all directive prologues (e. g. 'use strict')
                {
                    blankLine: 'always',
                    prev: 'directive',
                    next: '*',
                },
                // Disallow blank lines between all directive prologues (e. g. 'use strict')
                {
                    blankLine: 'never',
                    prev: 'directive',
                    next: 'directive',
                },
                // Require blank lines after every sequence of variable declarations
                {
                    blankLine: 'always',
                    prev: ['const', 'let', 'var'],
                    next: '*',
                },
                // Blank lines could be between variable declarations
                {
                    blankLine: 'any',
                    prev: ['const', 'let', 'var'],
                    next: ['const', 'let', 'var'],
                },
                // Require blank lines before all return statements
                {
                    blankLine: 'always',
                    prev: '*',
                    next: 'return',
                },
                // Require blank lines before and after all following statements
                {
                    blankLine: 'always',
                    prev: '*',
                    next: ['for', 'function', 'if', 'switch', 'try'],
                },
                {
                    blankLine: 'always',
                    prev: ['for', 'function', 'if', 'switch', 'try'],
                    next: '*',
                },
            ],
            'prefer-const': [
                'error',
                {
                    destructuring: 'any',
                    ignoreReadBeforeAssign: true,
                },
            ],
            'prefer-destructuring': [
                'error',
                {
                    VariableDeclarator: {
                        array: false,
                        object: true,
                    },
                    AssignmentExpression: {
                        array: true,
                        object: true,
                    },
                },
                { enforceForRenamedProperties: false },
            ],
            'rest-spread-spacing': ['error', 'never'],
            'symbol-description': 'error',
            'template-curly-spacing': 'error',
            'array-bracket-spacing': ['error', 'never'],
            'block-spacing': ['error', 'always'],
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            camelcase: ['error', { properties: 'never' }],
            'func-call-spacing': ['error', 'never'],
            'func-names': ['error', 'as-needed'],
            'linebreak-style': ['error', 'unix'],
            'new-cap': [
                'error',
                {
                    newIsCap: true,
                    newIsCapExceptions: [],
                    capIsNew: false,
                },
            ],
            'new-parens': 'error',
            'no-bitwise': 'off',
            'no-lonely-if': 'off',
            'no-mixed-operators': [
                'error',
                {
                    groups: [
                        ['%', '**'],
                        ['%', '+'],
                        ['%', '-'],
                        ['%', '*'],
                        ['%', '/'],
                        ['**', '+'],
                        ['**', '-'],
                        ['**', '*'],
                        ['**', '/'],
                        ['&', '|', '^', '~', '<<', '>>', '>>>'],
                        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
                        ['&&', '||'],
                        ['in', 'instanceof'],
                    ],
                    allowSamePrecedence: false,
                },
            ],
            'no-multi-assign': ['error'],
            'no-nested-ternary': 'error',
            'no-spaced-func': 'error',
            'no-unneeded-ternary': ['error', { defaultAssignment: false }],
            'no-whitespace-before-property': 'error',
            'quote-props': [
                'error',
                'as-needed',
                {
                    keywords: false,
                    unnecessary: true,
                    numbers: false,
                },
            ],
            quotes: ['error', 'single', { avoidEscape: true }],
            semi: ['error', 'always'],
            'semi-spacing': ['error', { before: false, after: true }],
            'semi-style': ['error', 'last'],
            'space-before-blocks': 'error',
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'always',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            'space-in-parens': ['error', 'never'],
            'space-unary-ops': [
                'error',
                {
                    words: true,
                    nonwords: false,
                    overrides: {},
                },
            ],
            'spaced-comment': ['error', 'always'],
            'no-unused-vars': 'off',
            'no-use-before-define': 'off',
            'no-redeclare': 'off',
            'no-undef': 'off',
            'no-empty': 'off',
            'no-console': 'warn',

            '@typescript-eslint/consistent-type-imports': [
                'error',
                {
                    disallowTypeAnnotations: true,
                    fixStyle: 'inline-type-imports',
                    prefer: 'type-imports',
                },
            ],
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-empty-object-type': 'off',
            '@typescript-eslint/no-unused-vars': [
                'error',
                {
                    args: 'after-used',
                    caughtErrors: 'all',
                    ignoreRestSiblings: false,
                    vars: 'all',
                },
            ],
            '@typescript-eslint/no-empty-interface': 'error',

            'react/display-name': 'off',
            'react/prop-types': 'off',
            'react/jsx-uses-react': 'off',
            'react/react-in-jsx-scope': 'off',
            'react/jsx-no-useless-fragment': ['error'],
            'react/forbid-component-props': ['error', { forbid: ['style'] }],
            'react/no-array-index-key': 'error',

            'react-hooks/exhaustive-deps': 'error',

            'import-x/no-unresolved': [
                'error',
                {
                    commonjs: true,
                    caseSensitive: true,
                },
            ],
            'import-x/no-useless-path-segments': 'off',
            'import-x/no-duplicates': 'off',
            'import-x/no-named-as-default-member': 'off',
            'import-x/no-named-as-default': 'off',
            'import-x/no-absolute-path': 'error',
            'import-x/order': [
                'error',
                {
                    groups: [['builtin', 'external', 'internal']],
                    pathGroups: [
                        {
                            pattern: 'react',
                            group: 'builtin',
                            position: 'before',
                        },
                        {
                            pattern: '~/**',
                            group: 'external',
                            position: 'after',
                        },
                    ],
                    pathGroupsExcludedImportTypes: ['react'],
                },
            ],

            'jsx-a11y/click-events-have-key-events': 'off',
            'jsx-a11y/no-static-element-interactions': 'off',
        },
    },
    {
        ignores: [
            '**/*.js',
            '**/generated/**',
            'node_modules/**',
            'dist/**',
            'out/**',
            'build/**',
            'build.ts', // Build script
            'config/**', // Config files
        ],
    },
];

export default eslintConfig;
