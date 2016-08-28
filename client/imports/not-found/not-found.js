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
var angular2_meteor_1 = require('angular2-meteor');
var not_found_html_1 = require('./not-found.html');
//  when menu is displayed, menu button become a back button
var NotFound = (function (_super) {
    __extends(NotFound, _super);
    function NotFound() {
        _super.apply(this, arguments);
    }
    NotFound = __decorate([
        core_1.Component({
            selector: 'notFound',
            template: not_found_html_1.default,
        }), 
        __metadata('design:paramtypes', [])
    ], NotFound);
    return NotFound;
}(angular2_meteor_1.MeteorComponent));
exports.NotFound = NotFound;
//# sourceMappingURL=not-found.js.map