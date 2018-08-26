import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-minha-empresa',
  templateUrl: 'minha-empresa.html'
})
export class MinhaEmpresaPage {

  constructor(
    public navCtrl: NavController,
    public navParam:NavParams
  ) {

  }

}
