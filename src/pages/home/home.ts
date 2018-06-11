import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';
import { CallNumber } from '@ionic-native/call-number';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private platform : Platform,
     private callNumber : CallNumber) {

  }

  async call(){
    await this.platform.ready();
    try{
      await this.callNumber.callNumber("996652972", true);
      console.log("Opened dialer")
    }
    catch (e){
      console.error(e || "error")
    }

  }

}
