import { Component, OnInit } from '@angular/core';
import { Svc1Service } from '../svc1.service';

@Component({
  selector: 'app-use-svc',
  templateUrl: './use-svc.component.html',
  styleUrls: ['./use-svc.component.css']
})
export class UseSvcComponent implements OnInit {

  constructor(public svcObj:Svc1Service) { }

  public PlugFb(){
    return this.svcObj.showFbNotifications();
  }

  ngOnInit(): void {
  }

}
