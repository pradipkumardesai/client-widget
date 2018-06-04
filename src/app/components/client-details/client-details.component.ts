import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from '../../services/client/client.service';

@Component({
  selector: 'cch-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.scss']
})
export class ClientDetailsComponent implements OnInit {

  id:string;
  name:string;
  address:string;

  constructor(private route:ActivatedRoute,private clientService:ClientService) { }

  ngOnInit() {
    let id:number = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.name = this.clientService.getClientById(id).name;
    this.address = this.clientService.getClientById(id).address;
  }

}
