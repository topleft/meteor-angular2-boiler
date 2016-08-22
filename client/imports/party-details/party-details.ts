import { Component } from '@angular/core';
import { ActivatedRoute, ROUTER_DIRECTIVES } from '@angular/router';
import { Mongo } from 'meteor/mongo';
import { Parties }   from '../../../collections/parties.ts';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { RequireUser, InjectUser } from 'angular2-meteor-accounts-ui';
import { CanActivate, ComponentInstruction } from '@angular/router-deprecated';

import template from './party-details.html';

// permission check not working
function checkPermissions(instruction: ComponentInstruction) {
  console.log('are we checking???')
  var partyId = instruction.params['partyId'];
  var party = Parties.findOne(partyId);
  return (party && party.ownerId == Meteor.userId());
}

@Component({
  selector: 'party-details',
  template,
  directives: [ROUTER_DIRECTIVES]
})
@InjectUser('user')
@RequireUser()
// this doesn't work
// @CanActivate(checkPermissions)

export class PartyDetails  extends MeteorComponent {
  partyId: string
  party: Party

  constructor(private route: ActivatedRoute) { super() }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.partyId = params['partyId'];

      this.subscribe('parties', () => {
        this.autorun(() => {
          this.party = Parties.findOne(this.partyId);
        }, true);
      });

    });
  }

  editParty( party: Party ) {
    Parties.update(party._id, {
      $set: {
        name: party.name,
        description: party.description,
        location: party.location
      }
    });
  };
}
