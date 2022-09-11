import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateObservablesComponent } from './create-observables/create-observables.component';
import { MapOperatorComponent } from './map-operator/map-operator.component';
import { HttpClientModule } from '@angular/common/http';
import { KeyValuePipe } from '@angular/common';
import { FilterComponentComponent } from './filter-component/filter-component.component';
import { TapComponent } from './tap/tap.component';
import { SwitchMapComponent } from './switch-map/switch-map.component';
import { MergeMapComponent } from './merge-map/merge-map.component';
import { ForJoinComponent } from './for-join/for-join.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateObservablesComponent,
    MapOperatorComponent,
    FilterComponentComponent,
    TapComponent,
    SwitchMapComponent,
    MergeMapComponent,
    ForJoinComponent,
    
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
