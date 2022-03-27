import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { MenuItemsComponent } from './components/menu-items/menu-items.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

import { DataService } from './services/data.service';
import { UserService } from './services/user.service';
import { ReservationService } from './services/reservation.service';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageComponent,
    MenuPageComponent,
    MenuItemsComponent,
    ReservationPageComponent,
    RegisterPageComponent,
    LoginPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule
  ],
  providers: [DataService, UserService, ReservationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
