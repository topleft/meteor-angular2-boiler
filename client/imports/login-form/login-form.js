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
require('reflect-metadata');
var accounts_base_1 = require('meteor/accounts-base');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var meteor_1 = require('meteor/meteor');
var angular2_meteor_1 = require('angular2-meteor');
var router_1 = require('@angular/router');
var login_form_html_1 = require('./login-form.html');
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm(router) {
        _super.call(this);
        this.router = router;
        var fb = new common_1.FormBuilder();
        this.createAccountButtonText = 'create account';
        this.isCreatingAccount = false;
        this.loginForm = fb.group({
            username: ['', common_1.Validators.required],
            password: ['', common_1.Validators.required],
            confirmPassword: ['']
        });
    }
    LoginForm.prototype.toggleIsCreatingAccount = function () {
        this.isCreatingAccount = !this.isCreatingAccount;
        if (this.isCreatingAccount) {
            this.createAccountButtonText = 'login';
        }
        else {
            this.createAccountButtonText = 'create account';
        }
    };
    LoginForm.prototype.login = function (user) {
        var _this = this;
        if (this.isCreatingAccount) {
            if (user.password === user.confirmPassword) {
                accounts_base_1.Accounts.createUser(user, function (err) {
                    if (err) {
                        console.log("Login error:", err);
                    }
                    else {
                        _this.router.navigate(['/']);
                        console.log("Success: #{user.username} is logged in!");
                    }
                });
            }
            else {
                console.log('Passwords do not match. Try again.');
            }
        }
        else {
            meteor_1.Meteor.loginWithPassword(user.username, user.password, function (err) {
                if (err) {
                    console.log("Login error:", err);
                }
            });
        }
    };
    ;
    LoginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            template: login_form_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], LoginForm);
    return LoginForm;
}(angular2_meteor_1.MeteorComponent));
exports.LoginForm = LoginForm;
;
//# sourceMappingURL=login-form.js.map