import 'reflect-metadata';
import { Component, provide } from '@angular/core';
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { PartiesForm } from './imports/parties-form/parties-form';
import { provideRouter, RouterConfig, ROUTER_DIRECTIVES } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { MainMenu } from './imports/main-menu/main-menu.ts';
import { PartiesList } from './imports/parties-list/parties-list.ts';
import { PartyDetails } from './imports/party-details/party-details.ts';
import { LoginForm } from './imports/login-form/login-form.ts';
import { Layout } from './imports/layout/layout.ts';
import { NotFound } from './imports/not-found/not-found.ts';

import template from './app.html';

@Component({
  selector: 'app',
  template,
  directives: [ROUTER_DIRECTIVES, Layout]
})

class Socially {}

const routes: RouterConfig = [
  { path: '',              	component: PartiesList },
  { path: 'party/:partyId',	component: PartyDetails },
  { path: 'main-menu',	        component: MainMenu },
  { path: 'login',	        component: LoginForm },
  { path: '**',	        component: NotFound },
];

const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

bootstrap(Socially, [APP_ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);
