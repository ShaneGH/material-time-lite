'use strict';

// NOTE: this file is not created from index.ts. 
// Typescript modules are compiled and bundled into the js files in the ./dist directory

if (process.env.NODE_ENV === 'production') {
    module.exports = require('./dist/analogue-time-picker.min.js');
} else {
    module.exports = require('./dist/analogue-time-picker.js');
}
