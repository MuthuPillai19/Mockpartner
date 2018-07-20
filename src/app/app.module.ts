import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ParamselectorComponent } from './home/paramselector/paramselector.component';
import { AppRoutingModule } from './app-routing.module';
import { GamemodeselectorComponent } from './home/gamemodeselector/gamemodeselector.component';
import { GlobalconfigpanelComponent } from './home/globalconfigpanel/globalconfigpanel.component';
import { PlayerconfigpanelComponent } from './home/playerconfigpanel/playerconfigpanel.component';
import { PlayerapipanelComponent } from './home/playerapipanel/playerapipanel.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ParamselectorComponent,
    GamemodeselectorComponent,
    GlobalconfigpanelComponent,
    PlayerconfigpanelComponent,
    PlayerapipanelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
