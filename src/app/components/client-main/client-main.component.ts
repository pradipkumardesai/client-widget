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

  constructor(private route:ActivatedRoute,private clientService:ClientService) { }

  ngOnInit() {
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.name = this.clientService.getClientById(id).name;
  }

}
