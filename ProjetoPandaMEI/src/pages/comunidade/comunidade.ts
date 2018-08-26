import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { GestaoNegocioPage } from '../gestao-negocio/gestao-negocio';

@Component({
  selector: 'page-comunidade',
  templateUrl: 'comunidade.html'
})
export class ComunidadePage {

  constructor(
    public navCtrl: NavController,
    public navParam:NavParams
  ) {
  }

  btnVerGestaoNegocio(){
    this.navCtrl.push(GestaoNegocioPage);
  }

}
