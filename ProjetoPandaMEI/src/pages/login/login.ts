import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController, Tabs } from 'ionic-angular';
import { NovasIdeiasPage } from '../novas-ideias/novas-ideias';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  // Captura de login e senha
  public email;
  public password;
  
  private loginErrorString: string;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController
  ) {

  }

  doLogin() {
    let account = {
      email:this.email,
      password:this.password
    }
    this.navCtrl.setRoot(TabsPage);
  }
}
