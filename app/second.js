System.register(['angular2/core', './third'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, third_1;
    var NextSecond;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (third_1_1) {
                third_1 = third_1_1;
            }],
        execute: function() {
            NextSecond = (function () {
                function NextSecond() {
                }
                NextSecond = __decorate([
                    core_1.Component({
                        selector: 'mani',
                        template: "<h1> I am using angular2..! </h1> <br/> <new-selector>Loading.. </new-selector>",
                        directives: [third_1.NextThird]
                    }), 
                    __metadata('design:paramtypes', [])
                ], NextSecond);
                return NextSecond;
            }());
            exports_1("NextSecond", NextSecond);
        }
    }
});
//# sourceMappingURL=second.js.map