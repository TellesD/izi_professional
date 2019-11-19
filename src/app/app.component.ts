import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Lançamento',
      url: '/home',
      icon: 'list'
    },
    {
      title: 'Meus ganhos',
      url: '/list',
      icon: 'cash'
    },
    {
      title: 'Estabelecimentos',
      url: '/places',
      icon: 'home'
    },
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    }
    
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
