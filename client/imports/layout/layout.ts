import { Component } from '@angular/core';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';
import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
import { MainMenu } from '../main-menu/main-menu.ts';


import template from './layout.html'

@Component({
  selector: 'layout',
  template,
  directives: [LoginButtons, ROUTER_DIRECTIVES, MainMenu]
})

export class Layout extends MeteorComponent {}
