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
  buttonText: String
  onClick: Function
  path: String

  constructor() {
    super()
  }

// figure out how to access meteor.user inside a component

  ngOnInit() {
    console.log('wowza user',)
    if (Meteor.user()) {
      this.user = Meteor.user()
      this.buttonText = 'Logout'
      this.onClick = Meteor.logout
      this.path = '/'
    } else {
      this.buttonText = 'Login'
      this.path = 'login'
    }

  };

}
