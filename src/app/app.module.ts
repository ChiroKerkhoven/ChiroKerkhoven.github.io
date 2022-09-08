import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EvenementenComponent } from './components/evenementen/evenementen.component';
import { EvenementComponent } from './components/evenement/evenement.component';
import { CalenderComponent } from './components/calender/calender.component';
import { OnzeGroepenComponent } from './components/onze-groepen/onze-groepen.component';
import { ContactComponent } from './components/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    EvenementenComponent,
    EvenementComponent,
    CalenderComponent,
    OnzeGroepenComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
