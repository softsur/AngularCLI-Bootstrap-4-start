import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// Rutas
import { RouterModule, Routes } from '@angular/router';

// Bootstrap 4 con NG-BootStrap
import { BsDropdownModule, AlertModule, CollapseModule, CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './site/navbar/navbar.component';
import { HomeComponent } from './content/home/home.component';
import { AboutComponent } from './content/about/about.component';
import { ContactComponent } from './content/contact/contact.component';
import { CarouselComponent } from './site/carousel/carousel.component';

const my_routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(my_routes),
    BsDropdownModule.forRoot(),
    AlertModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
