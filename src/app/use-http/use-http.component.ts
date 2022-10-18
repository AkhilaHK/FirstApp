import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-use-http',
  templateUrl: './use-http.component.html',
  styleUrls: ['./use-http.component.css']
})
export class UseHttpComponent implements OnInit {
  public comments:any = [];
  public webApiData:any = "";
    public ShowComments(){
      var request = this.http.get("https://jsonplaceholder.typicode.com/users").toPromise();
      request.then ((data) => this.comments = data);
    }
    public AccessWebApi(){
      var request = this.http.get("https://localhost:7029/allnames").toPromise();
      request.then ((data) => this.webApiData = data);
    }

  constructor(public http:HttpClient) { }

  ngOnInit(): void {
  }

}
