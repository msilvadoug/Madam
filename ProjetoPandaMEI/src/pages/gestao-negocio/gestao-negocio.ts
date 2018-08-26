import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'page-gestao-negocio',
  templateUrl: 'gestao-negocio.html'
})
export class GestaoNegocioPage {

  

  constructor(
    public navCtrl: NavController,
    public navParam:NavParams
  ) {

  }

}
