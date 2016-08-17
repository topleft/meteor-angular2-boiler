import { Component } from '@angular/core';
import { LoginButtons } from 'angular2-meteor-accounts-ui';
import { MeteorComponent } from 'angular2-meteor';

import template from './layout.html'

@Component({
  selector: 'layout',
  template,
  directives: [LoginButtons]
})

export class Layout extends MeteorComponent {}
