import 'reflect-metadata';
import { Accounts } from 'meteor/accounts-base';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { ActivatedRoute, ROUTER_DIRECTIVES, Router } from '@angular/router';

import template from './login-form.html';

@Component({
  selector: 'login-form',
  template,
  directives: [ROUTER_DIRECTIVES]
})

export class LoginForm extends MeteorComponent {

  loginForm: ControlGroup;
  isCreatingAccount: Boolean;
  createAccountButtonText: String;

  constructor (private router: Router) {
    super()
    let fb = new FormBuilder();
    this.createAccountButtonText = 'create account'
    this.isCreatingAccount = false;
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['']
    });
  }


  toggleIsCreatingAccount() {
    this.isCreatingAccount = !this.isCreatingAccount
    if (this.isCreatingAccount) {
      this.createAccountButtonText = 'login'
    } else {
      this.createAccountButtonText = 'create account'
    }
  }

  login(user) {
    if (this.isCreatingAccount) {
      if (user.password === user.confirmPassword) {
        Accounts.createUser(user, (err) => {
          if (err) {
            console.log("Login error:", err)
          } else {
            this.router.navigate(['/'])
            console.log("Success: #{user.username} is logged in!")
          }
        });
      } else {
        console.log('Passwords do not match. Try again.')
      }
    } else {
      Meteor.loginWithPassword(user.username, user.password, (err) => {
        if (err) {
          console.log("Login error:", err)
        }
      })
    }
  };

  // closes export
};
