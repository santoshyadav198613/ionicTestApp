import { Component } from '@angular/core';
import { NavController, ToastController, NavParams } from 'ionic-angular';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';
import { Ischools } from '../../providers/school'
import { IParent } from './IParent'
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'parent-info',
  templateUrl: 'ParentInfo.component.html'
})
export class ParentInfoComponent {
  schoolSessionId: number;
  parent: IParent ={
    PayerFirstName :"",
    PayerLastName : "",
    EmailAddress:"",
    City:"",
    Zip:"",
    AddressLine1:"",
    AddressLine2: ""
  }; I
  constructor(public navCtrl: NavController,  private _params: NavParams,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {


  }

  ionViewDidLoad(){
      this.schoolSessionId = this._params.get('id');
      console.log(this.schoolSessionId);
  }

}
