import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { ClientMainComponent } from "./components/client-main/client-main.component";
import { ClientDetailsComponent } from "./components/client-details/client-details.component";
import { NoPageFoundComponent } from "./components/no-page-found/no-page-found.component";

const clientRoutes:Routes=[
    {path:"",component:NoPageFoundComponent},
    { path:"main/:id",component:ClientMainComponent},
    { path:"details/:id",component:ClientDetailsComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(clientRoutes)],
    exports:[RouterModule]
})
export class ClientRouteModule{

}