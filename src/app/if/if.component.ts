import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrls: ['./if.component.css']
})
export class IfComponent implements OnInit {

  public status:boolean=false;
  public toggleImage(){
    this.status = !(this.status);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
