module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'standard-with-typescript',
		'eslint-config-prettier',
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		// sourceType: 'module',
		project: './tsconfig.json',

	},
	parser: '@typescript-eslint/parser',
	plugins: ['react'],
	rules: {},
};
