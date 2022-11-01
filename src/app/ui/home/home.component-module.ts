import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import {AppRoutingModule} from "../../app-routing.module";

@NgModule({
    imports: [
        AppRoutingModule
    ],
  declarations: [HomeComponent],
  providers: [],
  exports: [HomeComponent]
})
export class HomeComponentModule {
}
