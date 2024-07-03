module.exports = {
	env: {
		'jest/globals': true,
	},
	root: true,
	extends: [
		'@react-native',
		'airbnb',
		'eslint:recommended',
		'airbnb/hooks',
		'airbnb-typescript',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:prettier/recommended',
		'plugin:import/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	ignorePatterns: ['plugins/**/*', 'metro.config.js', 'react-native.config.js'],
	plugins: ['simple-import-sort'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		tsconfigRootDir: '.',
		project: ['./tsconfig.json'],
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
			},
			typescript: {},
		},
		react: {
			version: '18.x',
		},
	},
	rules: {
		'@typescript-eslint/no-unused-vars': 1,
		'no-use-before-define': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'react/prop-types': 'off',
		'global-require': 0,
		'@typescript-eslint/no-floating-promises': 'off',
		'react-hooks/exhaustive-deps': 'off',
		quotes: ['error', 'single'],
		'object-curly-spacing': ['error', 'always'],
		'array-bracket-spacing': ['error', 'never'],
		'react/require-default-props': [
			'error',
			{
				functions: 'defaultArguments',
			},
		],
		'react/default-props-match-prop-types': ['error'],
		'react/sort-prop-types': ['error'],
		'react/no-array-index-key': 'off',
		'no-tabs': 'off',
		'no-void': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/prefer-default-export': 'off',
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'react/display-name': 'off',
		'react/function-component-definition': 'off',
		'no-console': ['error', { allow: ['error'] }],
		'prettier/prettier': [
			'error',
			{
				printWidth: 100,
				endOfLine: 'lf',
				tabWidth: 2,
				indentStyle: 'space',
				useTabs: true,
				arrowParens: 'avoid',
				bracketSameLine: false,
				singleQuote: true,
				trailingComma: 'all',
			},
		],
		'simple-import-sort/imports': 'error', // Import configuration for `eslint-plugin-simple-import-sort`
		'simple-import-sort/exports': 'error', // Export configuration for `eslint-plugin-simple-import-sort`
	},
};