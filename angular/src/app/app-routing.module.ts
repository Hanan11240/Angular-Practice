import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateObservablesComponent } from './create-observables/create-observables.component';

const routes: Routes = [
  {path:'create-observable',component:CreateObservablesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
