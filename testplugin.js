/*!
 * @preserve
 *
 * testplugin jQuery Plugin
 * Author: @rwoloszyn
 * Project home: http://jedfoster.github.io/Readmore.js
 * Licensed under the MIT license
 *
 * Debounce function from http://davidwalsh.name/javascript-debounce-function
 * Some config taken from http://jedfoster.github.io/Readmore.js
 * and official gulp, livereload and VS Code official documentations.
 */

/* global jQuery */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(['jquery'], factory);
    } else if (typeof exports === 'object') {
        // CommonJS
        module.exports = factory(require('jquery'));
    } else {
        // Browser globals
        factory(jQuery);
    }
}(function ($) {
    'use strict';

    $.fn.testplugin = function () {
        //This plugins does almost nothign. It displays just text below.
        //See index.html for more configuration.
        console.log("working");
    };

}));