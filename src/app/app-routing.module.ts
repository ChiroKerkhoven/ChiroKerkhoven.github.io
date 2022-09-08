import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EvenementenComponent } from './components/evenementen/evenementen.component';
import { CalenderComponent } from './components/calender/calender.component';
import { OnzeGroepenComponent } from './components/onze-groepen/onze-groepen.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'evenementen', component: EvenementenComponent},
  {path: 'kalender', component: CalenderComponent},
  {path: 'onze-groepen', component: OnzeGroepenComponent},
  {path: 'contact', component: ContactComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
