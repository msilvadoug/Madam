import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { EmailValidator } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private account: {
    email:string,
    password:string
  };

  private search: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl:ToastController,
    public navParam:NavParams
  ) {
    this.account = this.navParam.get('accountParam');
  }

  eventoBotao(){
    this.navCtrl.push(LoginPage);
  }

  buttonOpenCalendar(){
    // this.navCtrl.push();
  }
}
