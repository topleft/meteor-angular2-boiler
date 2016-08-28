import 'reflect-metadata';
import { Accounts } from 'meteor/accounts-base';
import { Component } from '@angular/core';
import { FormBuilder, ControlGroup, Validators, Control } from '@angular/common';
import { Meteor } from 'meteor/meteor';
import { MeteorComponent } from 'angular2-meteor';
import { InjectUser } from 'angular2-meteor-accounts-ui';

import template from './login-form.html';

@Component({
  selector: 'login-form',
  template
})

export class LoginForm extends MeteorComponent {

  loginForm: ControlGroup;
  isCreatingAccount: Boolean;
  createAccountButtonText: String;

  constructor () {
    super()
    let fb = new FormBuilder();
    this.createAccountButtonText = 'create account'
    this.isCreatingAccount = false;
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['']
    })
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
    Meteor.loginWithPassword(user.username, user.password, (err) => {
      if (err) {
        console.log("Login error: #{err}")
      } else {
        console.log("Success: #{user.username is logged in!}")
      }
    })
  }

  // handle password match with  form validator
  createAccount(user) {
    if (user.password === user.confirmPassword) {
      Accounts.createUser(user, () => {
        Meteor.call('setPassword', Meteor.userId(), user.password, (err) => {
          if (err) {
            console.log("Creation error: #{err}")
          } else {
            console.log("Success: #{user.username is logged in!}")
          }
        })
      })

      Meteor.loginWithPassword(user.username, user.password, (err) => {
      })

    }
  }
};
