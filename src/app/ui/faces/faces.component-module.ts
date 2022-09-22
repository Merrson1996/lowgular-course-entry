import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacesComponent } from './faces.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FacesComponent],
  providers: [],
  exports: [FacesComponent]
})
export class FacesComponentModule {
}
