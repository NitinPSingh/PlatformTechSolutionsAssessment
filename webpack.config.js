const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');
var dotenv = require('dotenv').config({path: __dirname + '/.env'});
module.exports = {
    entry : './src/index.js',
    output :{ 
        
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
          },
          port: 3000,
          open: true,
          hot: true,
          compress: true,
          historyApiFallback: true,
        
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
       new webpack.ProvidePlugin({
            "React": "react",
         }),
         new webpack.DefinePlugin({ "process.env": dotenv.parsed })

    ],
    resolve: {
        // allows us to do absolute imports from "src"
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: ['*', '.js', '.jsx'],
          fallback: { 
              path: require.resolve("path-browserify") }
     
      },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/i,
                
                include: path.resolve(__dirname, 'src'),
                use: [
                    {
                        loader: 'style-loader', // inject CSS to page
                      }, {
                        loader: 'css-loader', // translates CSS into CommonJS modules
                      }, {
                        loader: 'postcss-loader', // Run post css actions
                        options: {
                          plugins: function () { // post css plugins, can be exported to postcss.config.js
                            return [
                              require('precss'),
                              require('autoprefixer')
                            ];
                          }
                        }
                      },
                    
                  ]
                

              }, {
                test: /\.css$/,
                 use: ['style-loader', 'css-loader','postcss-loader']
              } ,
              {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
        
                options: {
                  limit: 10000,
                  name: '[name].[ext]',
                  outputPath: 'public/images/'
                }
              },
              {
                test: /\.mp4$/,
                use: 'file-loader?name=videos/[name].[ext]',
         },
        ]
    },



}



    
   