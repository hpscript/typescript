const path = require('path');
module.exports = {
	entry: {
		bundle: './src/app.ts'
	},
	output: {
		path: path.join(__dirname,'dist'),
		filename: '[name].js'
	},
	resolve: {
		extensions:['.ts','.js']
	},
	devServer: {
		host: '192.168.34.10',
        port: '8000',
        static: "./dist",
        open: true
	},
	module: {
		rules: [
			{
				test:/\.ts$/,use:'ts-loader'
			}
		]
	},

}