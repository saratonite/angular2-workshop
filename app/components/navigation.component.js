System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var NavigationComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            NavigationComponent = (function () {
                function NavigationComponent() {
                    this.title = "Awesome Angular";
                    this.appName = "angular2-workshop";
                    this.links = [{ 'title': 'Home', 'path': '/' }, { 'title': 'About', 'path': '/about' }];
                }
                NavigationComponent = __decorate([
                    core_1.Component({
                        selector: "navigation",
                        template: "\n            <nav class=\"navbar navbar-default\">\n            <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n              <span class=\"sr-only\">Toggle navigation</span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n              <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">{{appName}}</a>\n          </div>\n            <ul class=\"nav navbar-nav\">\n                <li *ngFor=\"#link of links\"><a href=\"{{link.path}}\">{{link.title}}</a></li>\n            </ul>\n            </nav>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], NavigationComponent);
                return NavigationComponent;
            })();
            exports_1("NavigationComponent", NavigationComponent);
        }
    }
});
//# sourceMappingURL=navigation.component.js.map