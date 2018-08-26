import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { NovasIdeiasPage } from '../novas-ideias/novas-ideias';
import { ComunidadePage } from '../comunidade/comunidade';
import { MeusCursosPage } from '../meus-cursos/meus-cursos';
import { MinhaEmpresaPage } from '../minha-empresa/minha-empresa';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = NovasIdeiasPage;
  tab2Root = ComunidadePage;
  tab3Root = MeusCursosPage;
  tab4Root = MinhaEmpresaPage;

  constructor() {
  }
}
