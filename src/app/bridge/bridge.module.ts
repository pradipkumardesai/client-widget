import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IframeToParentService } from './services/iframe-to-parent.service';
import { ParentToIframeService } from './services/parent-to-iframe.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    IframeToParentService,
    ParentToIframeService
  ]
})
export class BridgeModule { }
