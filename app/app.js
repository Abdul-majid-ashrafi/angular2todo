System.register(['angular2/platform/browser', './second'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var browser_1, second_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (second_1_1) {
                second_1 = second_1_1;
            }],
        execute: function() {
            // import {Component} from 'angular2/core';
            // @Component({
            //     selector : 'mani',
            //     template : `<h1> Hello World angular2.! </h1>`
            // })
            // class ComponentUp {}
            // bootstrap(ComponentUp);
            browser_1.bootstrap(second_1.NextSecond);
        }
    }
});
//# sourceMappingURL=app.js.map