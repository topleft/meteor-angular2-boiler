"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var angular2_meteor_1 = require('angular2-meteor');
var main_menu_html_1 = require('./main-menu.html');
var MainMenu = (function (_super) {
    __extends(MainMenu, _super);
    function MainMenu() {
        _super.call(this);
    }
    MainMenu.prototype.ngOnInit = function () {
        this.links = [
            { displayText: 'Sausage', path: 'Sausage' },
            { displayText: 'Bacon', path: 'Bacon' },
            { displayText: 'Ribs', path: 'Ribs' },
            { displayText: 'Salami', path: 'Salami' }
        ];
    };
    ;
    MainMenu = __decorate([
        core_1.Component({
            selector: 'main-menu',
            template: main_menu_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], MainMenu);
    return MainMenu;
}(angular2_meteor_1.MeteorComponent));
exports.MainMenu = MainMenu;
//# sourceMappingURL=main-menu.js.map