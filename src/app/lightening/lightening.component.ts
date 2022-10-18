import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-lightening',
  templateUrl: './lightening.component.html',
  styleUrls: ['./lightening.component.css']
})
export class LighteningComponent implements OnInit {
   
  public lightUp(mydiv:any){
    mydiv.style="background-color: pink";

  }
  public switchOff(mydiv:any){
    mydiv.style="background-color: aqua";
  }

  public dontDisturb(mydiv:any){
    mydiv.style="background-color: black; color: white";
    mydiv.innerText = "Don't disturb me!";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
