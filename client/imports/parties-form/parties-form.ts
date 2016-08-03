import 'reflect-metadata';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Parties } from '../../../collections/parties.ts';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';

import template from './parties-form.html';

@Component({
  selector: 'parties-form',
  template
})

@InjectUser("user")

export class PartiesForm extends MeteorComponent {
  user: Meteor.User;
  partiesForm: ControlGroup;

  constructor() {
    super()
    let fb = new FormBuilder();

    this.partiesForm = fb.group({
      name: ['', Validators.required],
      description: [''],
      location: ['', Validators.required]
    });
  }

  addParty(party: Party) {
    if (this.user) {
      if (this.partiesForm.valid) {
        Parties.insert({
          name: party.name,
          description: party.description,
          location: party.location,
          ownerId: this.user._id
        });

        (<Control>this.partiesForm.controls['name']).updateValue('');
        (<Control>this.partiesForm.controls['description']).updateValue('');
        (<Control>this.partiesForm.controls['location']).updateValue('');
      }
    }
    else {
      alert('You must login to add a party')
    }
  }
}
