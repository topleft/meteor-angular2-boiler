
import { Component } from '@angular/core';
import { Parties }   from '../../../collections/parties.ts';
import { Mongo }     from 'meteor/mongo';
import { PartiesForm } from '../parties-form/parties-form';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { Meteor } from 'meteor/meteor'
import { MeteorComponent } from 'angular2-meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import template from './parties-list.html'

@Component({
  selector: 'parties-list',
  template,
  directives: [PartiesForm, ROUTER_DIRECTIVES]
})
@InjectUser('user')
export class PartiesList extends MeteorComponent {
  user: Meteor.User
  parties: Mongo.Cursor<Party>;

  constructor () {
    super()
    this.subscribe('parties', () => {
      this.parties = Parties.find();
    }, true);
  }

  removeParty(party: Party) {
    Parties.remove(party._id);
  }
}
