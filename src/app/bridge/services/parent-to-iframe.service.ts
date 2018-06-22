import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class ParentToIframeService {
  private onFromIframeMessage = new Subject<string>();
  private that = this;

  constructor() {
    console.log(this);
    window.addEventListener("message", this.receiveMessage.bind(this), false);
  }

  sendMessageToChild(iframeElement, messageObject) {
    iframeElement.contentWindow.postMessage(JSON.stringify(messageObject), "*");
  }

  receiveMessage(event) {
    if (event.origin === "http://localhost:4300")
      this.getOnFromIframeMessageRef().next(JSON.stringify(event.data));
  }

  getOnFromIframeMessageRef() {
    return this.onFromIframeMessage;
  }
}
