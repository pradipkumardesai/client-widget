import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'cch-client-main',
  templateUrl: './client-main.component.html',
  styleUrls: ['./client-main.component.scss']
})
export class ClientMainComponent implements OnInit {

  id:string;
  name:string;

  constructor(private route:ActivatedRoute,private clientService:ClientService) { 
   
  }

  receiveMessage(event){
    if (event.origin === "http://localhost:4200")
      alert(JSON.stringify(event.origin +" - "+ event.data));
  }

  callParent(){
    window.parent.postMessage("Hello from child", '*');
  }

  ngOnInit() {
    window.addEventListener("message", this.receiveMessage, false);
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.name = this.clientService.getClientById(id).name;

  }

}
