import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-filtro',
  templateUrl: 'filtro.html'
})
export class FiltroPage {

  constructor(
    public navCtrl: NavController,
    public navParam:NavParams
  ) {

  }

}
