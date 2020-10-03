
const path = require('path');


module.exports = {

    mode: 'development',
    entry: './scripts/scripts.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/build.js'
        
    },
    watch: true
    


}