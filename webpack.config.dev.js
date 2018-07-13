import path from 'path';

export default { 
  debug: true, // enables debugging tool
  devtool: 'inline-source-map', // compilations speed vs quality
  noInfo: false, // display list of all files thats bundling
  entry: [
    path.resolve(__dirname, 'src/index')   // entry point src index
  ],
  target: 'web', // web/node/electron
  output: {
      // where should we create dev bundle
      // web pack dont actually generate  anyphysical file it will just create a bundle and memory
      // and serve it to browser but we need to defien the path and name so it can simulate
      // the physical file existence
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [], // enahbance web pack power, like hot relaoding
  module: {
      // file types we need to handle js,css,saas, lass
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}


// to use webapack we need development server