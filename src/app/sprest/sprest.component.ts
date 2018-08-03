import { Component, OnInit } from '@angular/core';
import { SprestService } from '../sprest.service';
import * as AuthenticationContext from 'adal-angular';


@Component({
  selector: 'app-sprest',
  templateUrl: './sprest.component.html',
  styleUrls: ['./sprest.component.css'],
  providers: [SprestService]
})

export class SprestComponent implements OnInit {

   
  messageText = '';    
  constructor(private _myService: SprestService) { 
  }  
  onClickMe() { 

      // this.messageText = this._myService.GetText(); 
      this._myService.GetText();   

  }  

  ngOnInit() {}


}
