import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {
  public name:string="Anitha";
  public role:string="Analyst";
  public pplArray:any= [];
  public status:string="";

  public Add(ctrl:any){
    this.pplArray.push({name:this.name, role:this.role,dp:'https://unsplash.it/45/45/?random'});
    var lastIndex = this.pplArray.length-1;
    var lastItem = this.pplArray[lastIndex];
    this.status = `User ${lastItem.name} added with Role ${lastItem.role}!`;
    ctrl.style = "color:green; font-style: italic; background-color:yellow;";


  }

  constructor() { }

  ngOnInit(): void {
  }

}
