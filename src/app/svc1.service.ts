import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Svc1Service {
  public showFbNotifications() : string[]{
    return ["New Friend Request", "Your post was liked 1000 friends","Your friend posted for the first time"];
  }

  public getCommentsForPost(postId:number){
    
  }

  constructor() { }
}
