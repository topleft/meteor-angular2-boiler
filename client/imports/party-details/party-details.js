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
var parties_ts_1 = require('../../../collections/parties.ts');
var meteor_1 = require('meteor/meteor');
var angular2_meteor_1 = require('angular2-meteor');
var angular2_meteor_accounts_ui_1 = require('angular2-meteor-accounts-ui');
var party_details_html_1 = require('./party-details.html');
// permission check not working
function checkPermissions(instruction) {
    console.log('are we checking???');
    var partyId = instruction.params['partyId'];
    var party = parties_ts_1.Parties.findOne(partyId);
    return (party && party.ownerId == meteor_1.Meteor.userId());
}
var PartyDetails = (function (_super) {
    __extends(PartyDetails, _super);
    function PartyDetails(route) {
        _super.call(this);
        this.route = route;
    }
    PartyDetails.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.partyId = params['partyId'];
            _this.subscribe('parties', function () {
                _this.autorun(function () {
                    _this.party = parties_ts_1.Parties.findOne(_this.partyId);
                }, true);
            });
        });
    };
    PartyDetails.prototype.editParty = function (party) {
        console.log('party', party);
        parties_ts_1.Parties.update(party._id, {
            $set: {
                name: party.name,
                description: party.description,
                location: party.location
            }
        });
    };
    ;
    PartyDetails = __decorate([
        core_1.Component({
            selector: 'party-details',
            template: party_details_html_1.default,
            directives: [router_1.ROUTER_DIRECTIVES]
        }),
        angular2_meteor_accounts_ui_1.InjectUser('user'),
        angular2_meteor_accounts_ui_1.RequireUser(), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], PartyDetails);
    return PartyDetails;
}(angular2_meteor_1.MeteorComponent));
exports.PartyDetails = PartyDetails;
//# sourceMappingURL=party-details.js.map