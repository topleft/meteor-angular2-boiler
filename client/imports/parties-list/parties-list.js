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
var parties_ts_1 = require('../../../collections/parties.ts');
var parties_form_1 = require('../parties-form/parties-form');
var router_1 = require('@angular/router');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var angular2_meteor_1 = require('angular2-meteor');
var angular2_meteor_accounts_ui_2 = require('angular2-meteor-accounts-ui');
var parties_list_html_1 = require('./parties-list.html');
var PartiesList = (function (_super) {
    __extends(PartiesList, _super);
    function PartiesList() {
        var _this = this;
        _super.call(this);
        this.subscribe('parties', function () {
            console.log('whoat whoat');
            _this.parties = parties_ts_1.Parties.find();
        }, true);
    }
    PartiesList.prototype.removeParty = function (party) {
        parties_ts_1.Parties.remove(party._id);
    };
    PartiesList = __decorate([
        core_1.Component({
            selector: 'parties-list',
            template: parties_list_html_1.default,
            directives: [parties_form_1.PartiesForm, router_1.ROUTER_DIRECTIVES, angular2_meteor_accounts_ui_1.LoginButtons]
        }),
        angular2_meteor_accounts_ui_2.InjectUser('user'), 
        __metadata('design:paramtypes', [])
    ], PartiesList);
    return PartiesList;
}(angular2_meteor_1.MeteorComponent));
exports.PartiesList = PartiesList;
//# sourceMappingURL=parties-list.js.map