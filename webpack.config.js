var path = require('path');

module.exports = {
    context: path.join(__dirname, "/app"),
    entry: "./index.js",
    output: {
        path: path.join(__dirname, "/public"),
        filename: "bundle.js"
    },
    devtool: 'source-map',
    module: {
	  	loaders: [
	  		{
			    test: /\.html$/,
			    loader: "angular-templatecache-loader"
			},
	    	{
		      	test: /\.js$/,
		      	exclude: /(node_modules|bower_components)/,
		      	loaders: ['ng-annotate', 'babel-loader?presets=es2015']
	    	},
	    	{
		        test: /\.scss$/,
		        loaders: ["style-loader", "css-loader", "sass-loader"]
		    }
	  	]
	},
	resolve: {
		root: path.join(__dirname, '/app')
	},
    devServer: {
        port: 8080,
        proxy: {
	      '/v2/*': {
	        target: 'https://api.citybik.es',
	        changeOrigin: true
	      }
	    }
    }
}