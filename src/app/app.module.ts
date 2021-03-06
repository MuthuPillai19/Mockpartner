import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParamselectorComponent } from './home/paramselector/paramselector.component';
import { AppRoutingModule } from './app-routing.module';
import { GamemodeselectorComponent } from './home/gamemodeselector/gamemodeselector.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParamselectorComponent,
    GamemodeselectorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
