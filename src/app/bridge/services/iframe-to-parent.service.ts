import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class IframeToParentService {

  onParentMessageReceived = new Subject<string>();

  constructor() { 
    window.addEventListener("message", this.receiveMessage.bind(this), false);
  }

  public sendMessageToParent(message){
    window.parent.postMessage(message, '*');
  }

  private receiveMessage(event){
    if (event.origin === "http://localhost:4200")
      this.onParentMessageReceived.next(event.data);
  }
}
