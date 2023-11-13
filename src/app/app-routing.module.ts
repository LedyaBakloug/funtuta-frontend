import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { FlightsComponent } from './components/flights/flights.component';
import { HotelsComponent } from './components/hotels/hotels.component';
import { ThingsToDoComponent } from './components/things-to-do/things-to-do.component';
import { PackagesComponent } from './components/packages/packages.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { CruisesComponent } from './components/cruises/cruises.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'signup', component: UserSignupComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard]  },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'forgotpassword', component: ForgotPasswordComponent, canActivate: [AuthGuard]  },
  { path: 'flights', component: FlightsComponent},
  { path: 'hotels', component: HotelsComponent },
  { path: 'packages', component: PackagesComponent },
  { path: 'thingstodo', component: ThingsToDoComponent },
  { path: 'cruises', component: CruisesComponent},
  { path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
