import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { SearchPage } from '../../pages/search/search';
import { ReportPage } from '../../pages/report/report';
import { DogPoundPage } from '../../pages/dog-pound/dog-pound';
import { TrackPage } from '../../pages/track/track';
import { MainPage } from '../../pages/main/main';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  private MainPage = MainPage;
  private SearchPage = SearchPage;
  private ReportPage = ReportPage;
  private DogPoundPage = DogPoundPage;
  private TrackPage = TrackPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }

}
