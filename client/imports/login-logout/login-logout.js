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
var meteor_1 = require('meteor/meteor');
var angular2_meteor_1 = require('angular2-meteor');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var login_logout_html_1 = require('./login-logout.html');
var LoginLogout = (function (_super) {
    __extends(LoginLogout, _super);
    function LoginLogout() {
        _super.call(this);
    }
    LoginLogout.prototype.logout = function () {
        meteor_1.Meteor.logout();
    };
    LoginLogout = __decorate([
        core_1.Component({
            selector: 'login-logout',
            template: login_logout_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        angular2_meteor_accounts_ui_1.InjectUser('user'), 
        __metadata('design:paramtypes', [])
    ], LoginLogout);
    return LoginLogout;
}(angular2_meteor_1.MeteorComponent));
exports.LoginLogout = LoginLogout;
//# sourceMappingURL=login-logout.js.map