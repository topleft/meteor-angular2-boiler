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
var login_form_html_1 = require('./login-form.html');
var LoginForm = (function (_super) {
    __extends(LoginForm, _super);
    function LoginForm() {
        _super.call(this);
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
        meteor_1.Meteor.loginWithPassword(user.username, user.password, function (err) {
            if (err) {
                console.log("Login error: #{err}");
            }
            else {
                console.log("Success: #{user.username is logged in!}");
            }
        });
    };
    // handle password match with  form validator
    LoginForm.prototype.createAccount = function (user) {
        if (user.password === user.confirmPassword) {
            accounts_base_1.Accounts.createUser(user, function () {
                meteor_1.Meteor.call('setPassword', meteor_1.Meteor.userId(), user.password, function (err) {
                    if (err) {
                        console.log("Creation error: #{err}");
                    }
                    else {
                        console.log("Success: #{user.username is logged in!}");
                    }
                });
            });
            meteor_1.Meteor.loginWithPassword(user.username, user.password, function (err) {
            });
        }
    };
    LoginForm = __decorate([
        core_1.Component({
            selector: 'login-form',
            template: login_form_html_1.default
        }), 
        __metadata('design:paramtypes', [])
    ], LoginForm);
    return LoginForm;
}(angular2_meteor_1.MeteorComponent));
exports.LoginForm = LoginForm;
;
//# sourceMappingURL=login-form.js.map