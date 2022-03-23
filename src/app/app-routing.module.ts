import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutPageComponent } from './components/checkout-page/checkout-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ReservationPageComponent } from './components/reservation-page/reservation-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'menu', component: MenuPageComponent },
  { path: 'menu/:catId', component: MenuPageComponent },
  { path: 'reserve', component: ReservationPageComponent },
  { path: 'checkout', component: CheckoutPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
