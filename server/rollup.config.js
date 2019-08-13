
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';



module.exports = {
    input: "./server.js", 
    output: {
        file: "./build/bundle.js", 
        format: "iife",
        name: "bundle"
    }, 
    plugins: [
        resolve(), 
        commonjs()
    ]
}