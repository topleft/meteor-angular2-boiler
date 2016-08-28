import { Component } from '@angular/core';
import { MeteorComponent } from 'angular2-meteor';


import template from './not-found.html'


//  when menu is displayed, menu button become a back button

@Component({
  selector: 'notFound',
  template,
})

export class NotFound extends MeteorComponent {}
