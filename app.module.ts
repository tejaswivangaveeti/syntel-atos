import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule}from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingComponent } from './binding/binding.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { GenderpipeComponent } from './genderpipe/genderpipe.component';
import { YellowdirectiveComponent } from './yellowdirective/yellowdirective.component';
import { AngularpipesComponent } from './angularpipes/angularpipes.component';
import { DirectivedemoComponent } from './directivedemo/directivedemo.component';

@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    PipedemoComponent,
    GenderpipeComponent,
    YellowdirectiveComponent,
    AngularpipesComponent,
    DirectivedemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
