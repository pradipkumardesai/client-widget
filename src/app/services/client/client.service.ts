import { Injectable } from '@angular/core';
import { Client } from '../../models/client';

@Injectable()
export class ClientService {

  clients:Array<Client>

  constructor() { 
    this.setClients();
  }

  private setClients(){
    this.clients = new Array<Client>();
    this.clients.push(new Client(1,"Client11","Address11"));
    this.clients.push(new Client(2,"Client22","Address22"));
  }

  public getClientById(id:Number){
    let c:Client=null;
    for(var i = 0;i<this.clients.length;i++){
      if(this.clients[i].id === id)
      c = this.clients[i];
    }
    return c;
  }

}
