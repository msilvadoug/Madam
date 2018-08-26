import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';
import { TemaPage } from '../tema-page/tema-page';
import { Curso } from '../../beans/Curso';

@Component({
  selector: 'page-novas-ideias',
  templateUrl: 'novas-ideias.html'
})
export class NovasIdeiasPage {

  constructor(
    public navCtrl: NavController,
    public navParam:NavParams
  ) {

  }

  btnTema(){
    this.navCtrl.push(TemaPage);
  }

  btnGestaoFinancas(){
    this.navCtrl.push(TemaPage);
  }

  tersteJSON() {

    let jsonObj = '[{"name":"Livros Gratuitos - Wattpad","updated":"22 de agosto de 2018","category":"Livros e refer\u00eancias","rating":"Avaliado com 4,6 de 5 estrelas","pageurl":"https://play.google.com/store/apps/details?id=wp.wattpad","image":"https://lh3.googleusercontent.com/FrOUuY5J05qkd4c7eiY7aGQXmKOygQazugAq0whFksQdq7qfEwjw2IaY_6J4ua49oFwA=s180","evaluators":"2.935.495 avalia\u00e7\u00f5es"},{  "name":"FeedMe (RSS Reader | Podcast)","updated":"14 de junho de 2018","category":"Not\u00edcias e revistas","rating":"Avaliado com 4,2 de 5 estrelas","pageurl":"https://play.google.com/store/apps/details?id=com.seazon.feedme","image":"https://lh3.googleusercontent.com/KWDGcBLhBvDxqed369EMLSPRZKnQhsYRGXJUp4UK7JijwFOhKhcd3LD6JCJUXQb8oNM=s180","evaluators":"3.813 avalia\u00e7\u00f5es"}]';


    var cursos:Curso[] = JSON.parse(jsonObj);

    console.log(cursos);
 
  }

  btnCursos(){
    this.navCtrl.parent.select(2);
  }
  
}
