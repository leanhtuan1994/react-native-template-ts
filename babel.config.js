/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		[
			'module-resolver',
			{
				root: ['./src'],
				extensions: ['.js', '.json'],
				alias: {
					'@': './src',
				},
			},
		],
		'inline-dotenv',
		'@babel/plugin-transform-export-namespace-from',
		'react-native-reanimated/plugin',
	],
	env: {
		production: {
			plugins: ['transform-remove-console'],
		},
	},
};
