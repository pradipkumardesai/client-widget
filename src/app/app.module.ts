import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ClientMainComponent } from './components/client-main/client-main.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ClientService } from './services/client/client.service';
import { ClientRouteModule } from './app.route.module';
import { NoPageFoundComponent } from './components/no-page-found/no-page-found.component';
import { BridgeModule } from './bridge/bridge.module';


@NgModule({
  declarations: [
    AppComponent,
    ClientMainComponent,
    ClientDetailsComponent,
    NoPageFoundComponent
  ],
  imports: [
    BrowserModule,
    ClientRouteModule,
    BridgeModule
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
