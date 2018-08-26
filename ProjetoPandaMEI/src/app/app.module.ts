import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, Tabs } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { NovasIdeiasPage } from '../pages/novas-ideias/novas-ideias';
import { TabsPage } from '../pages/tabs/tabs';
import { MeusCursosPage } from '../pages/meus-cursos/meus-cursos';
import { ComunidadePage } from '../pages/comunidade/comunidade';
import { MinhaEmpresaPage } from '../pages/minha-empresa/minha-empresa';
import { PostPage } from '../pages/post/post';
import * as temaPage from '../pages/tema-page/tema-page';
import { GestaoNegocioPage } from '../pages/gestao-negocio/gestao-negocio';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    NovasIdeiasPage,
    TabsPage,
    MeusCursosPage,
    ComunidadePage,
    MinhaEmpresaPage,
    PostPage,
    temaPage.TemaPage,
    GestaoNegocioPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    NovasIdeiasPage,
    TabsPage,
    MeusCursosPage,
    ComunidadePage,
    MinhaEmpresaPage,
    PostPage,
    temaPage.TemaPage,
    GestaoNegocioPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
