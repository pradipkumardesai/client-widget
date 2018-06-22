import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client/client.service';
import { IframeToParentService } from '../../bridge/services/iframe-to-parent.service';

@Component({
  selector: 'cch-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.scss']
})
export class ClientMainComponent implements OnInit {

  id:string;
  name:string;

  constructor(private route:ActivatedRoute,private clientService:ClientService,private iframeToParentService:IframeToParentService) { 
    this.iframeToParentService.onParentMessageReceived.subscribe(data=>{
      alert(data);
    });
  }

  callParent(){
    this.iframeToParentService.sendMessageToParent("Hello from child");
  }

  ngOnInit() {   
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.name = this.clientService.getClientById(id).name;

  }

}
