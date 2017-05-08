import { Component , ViewChild} from '@angular/core';
import { NavController, ToastController, NavParams ,Slides  } from 'ionic-angular';
 
import { CityProvider, city } from  '../../providers/cityprovider' 
import { IParent } from './IParent'
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'parent-info',
  templateUrl: 'ParentInfo.component.html',
  providers : [CityProvider]
})
export class ParentInfoComponent {
  schoolSessionId: number;
  cityList : city[];
  parent: IParent ={
    PayerFirstName :"",
    PayerLastName : "",
    EmailAddress:"",
    City:"",
    Zip:"",
    AddressLine1:"",
    AddressLine2: "",
    State: "",
    PhoneMobile: "",
    PhoneHome: ""
  }; I
  @ViewChild(Slides) slides: Slides;
  constructor(public navCtrl: NavController,  private _params: NavParams,
    public toastCtrl: ToastController,private cityprovider: CityProvider) {

  }

  ionViewDidLoad(){
      this.schoolSessionId = this._params.get('id');
      console.log(this.schoolSessionId);
      this.cityList= this.cityprovider.getCityList();
  }

ngAfterViewInit(){
    this.slides.lockSwipes(true);
}
}
