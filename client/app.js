"use strict";
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
var core_1 = require('@angular/core');
var angular2_meteor_auto_bootstrap_1 = require('angular2-meteor-auto-bootstrap');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
var main_menu_ts_1 = require('./imports/main-menu/main-menu.ts');
var parties_list_ts_1 = require('./imports/parties-list/parties-list.ts');
var party_details_ts_1 = require('./imports/party-details/party-details.ts');
var login_form_ts_1 = require('./imports/login-form/login-form.ts');
var layout_ts_1 = require('./imports/layout/layout.ts');
var not_found_ts_1 = require('./imports/not-found/not-found.ts');
var app_html_1 = require('./app.html');
var Socially = (function () {
    function Socially() {
    }
    Socially = __decorate([
        core_1.Component({
            selector: 'app',
            template: app_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES, layout_ts_1.Layout]
        }), 
        __metadata('design:paramtypes', [])
    ], Socially);
    return Socially;
}());
var routes = [
    { path: '', component: parties_list_ts_1.PartiesList },
    { path: 'party/:partyId', component: party_details_ts_1.PartyDetails },
    { path: 'main-menu', component: main_menu_ts_1.MainMenu },
    { path: 'login', component: login_form_ts_1.LoginForm },
    { path: '**', component: not_found_ts_1.NotFound },
];
var APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(routes)
];
angular2_meteor_auto_bootstrap_1.bootstrap(Socially, [APP_ROUTER_PROVIDERS, core_1.provide(common_1.APP_BASE_HREF, { useValue: '/' })]);
//# sourceMappingURL=app.js.map