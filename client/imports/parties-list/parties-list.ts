
import { Component } from '@angular/core';
import { Parties }   from '../../../collections/parties.ts';
import { Mongo }     from 'meteor/mongo';
import { PartiesForm } from '../parties-form/parties-form';
import { ROUTER_DIRECTIVES }  from '@angular/router';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { Meteor } from 'meteor/meteor'
import { MeteorComponent } from 'angular2-meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';
import template from './parties-list.html'

@Component({
  selector: 'parties-list',
  template,
  directives: [PartiesForm, ROUTER_DIRECTIVES, LoginButtons]
})
@InjectUser('user')
export class PartiesList extends MeteorComponent {
  user: Meteor.User
  parties: Mongo.Cursor<Party>;

  constructor () {
    super()
    this.subscribe('parties', () => {
      console.log('whoat whoat')
      this.parties = Parties.find();
    }, true);
  }

  removeParty(party: Party) {
    Parties.remove(party._id);
  }
}
