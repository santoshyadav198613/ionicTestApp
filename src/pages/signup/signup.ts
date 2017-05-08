import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { User } from '../../providers/user';
import { SchoolApi } from '../../providers/schoolApi'
import { Ischools } from '../../providers/school'
import { ParentInfoComponent } from '../../pages/Parent/ParentInfo.compoment'
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [SchoolApi]
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  SchoolDetails: Ischools[];
  school: { name: string } = {
    name: '11418'
  };


  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService, private _api: SchoolApi) {


  }

  search(schoolData) {
    this.SchoolDetails = this._api.getSchoolData();
  }

  openItem(school: Ischools) {
    this.navCtrl.push(ParentInfoComponent, { id: school.SchoolSessionId });
  }
}
