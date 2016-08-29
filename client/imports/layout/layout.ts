import { Component } from '@angular/core';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MainMenu } from '../main-menu/main-menu.ts';
import { LoginLogout } from '../login-logout/login-logout.ts';


import template from './layout.html'


//  when menu is displayed, menu button become a back button

@Component({
  selector: 'layout',
  template,
  directives: [LoginButtons, ROUTER_DIRECTIVES, MainMenu, LoginButtons, LoginLogout]
})

export class Layout extends MeteorComponent {}
