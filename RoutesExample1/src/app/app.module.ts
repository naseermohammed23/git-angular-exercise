import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BowComponent } from './bow/bow.component';
import { BomComponent } from './bom/bom.component';
import { AccomplishComponent } from './accomplish/accomplish.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'bow', component: BowComponent},
  {path: 'bom', component: BomComponent},
  {path: 'accomplish', component: AccomplishComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    BowComponent,
    BomComponent,
    AccomplishComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
