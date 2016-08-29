import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { Meteor } from 'meteor/meteor'
import { MeteorComponent } from 'angular2-meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';

import template from './login-logout.html';

@Component({
  selector: 'login-logout',
  template,
  directives: [ROUTER_DIRECTIVES]
})

@InjectUser('user')

export class LoginLogout extends MeteorComponent {
  user: Meteor.User

  constructor() {
    super()
  }

  logout() {
    Meteor.logout()
  }
}
