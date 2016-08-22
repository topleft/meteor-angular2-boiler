import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Meteor } from 'meteor/meteor'
import { MeteorComponent } from 'angular2-meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';

import template from './main-menu.html';

@Component({
  selector: 'main-menu',
  template,
  directives: [ROUTER_DIRECTIVES]
})

// @InjectUser('user')

export class MainMenu extends MeteorComponent {
  user: Meteor.User
  links: Link[]

  constructor() {
    super()
  }

  ngOnInit() {
    this.links = [
      {displayText: 'Sausage', path: 'Sausage'},
      {displayText: 'Bacon', path: 'Bacon'},
      {displayText: 'Ribs', path: 'Ribs'},
      {displayText: 'Salami', path: 'Salami'}
    ]
  };

}
