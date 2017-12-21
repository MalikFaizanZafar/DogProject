import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SearchPage } from '../../pages/search/search';
import { ReportPage } from '../../pages/report/report';
import { DogPoundPage } from '../../pages/dog-pound/dog-pound';
import { TrackPage } from '../../pages/track/track';

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }
  toSearchPage(){
    this.navCtrl.push(SearchPage);
  }
  toReportPage(){
    this.navCtrl.push(ReportPage);
  }
  toDogPoundPage(){
    this.navCtrl.push(DogPoundPage);
  }
  toTrackPage(){
    this.navCtrl.push(TrackPage);
  }
}
