import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateObservablesComponent } from './create-observables/create-observables.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { HttpClientModule } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CreateObservablesComponent,
    MapOperatorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
