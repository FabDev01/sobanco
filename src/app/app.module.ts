import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MaterialModule} from './modules/material-module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './site/home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ServiceComponent } from './site/service/service.component';
import { PortifolioComponent } from './site/portifolio/portifolio.component';
import { SobreComponent } from './site/sobre/sobre.component';
import { ContatosComponent } from './site/contatos/contatos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServiceComponent,
    PortifolioComponent,
    SobreComponent,
    ContatosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
