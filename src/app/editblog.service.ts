import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EditblogService {

  selectCall;
  constructor() { }
  BlogInfo(call){
    console.log("dcall service service");
    this.selectCall=call;
    console.log(this.selectCall);  
  }
  getSelectedCall(){
    return this.selectCall;
  }
}
