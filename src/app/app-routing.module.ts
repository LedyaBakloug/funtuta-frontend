import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:UserLoginComponent},
  {path:'signup', component:UserSignupComponent},
  {path:'admin', component:AdminComponent},
  {path:'customer', component:CustomerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
