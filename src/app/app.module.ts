import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { UsersComponent } from './components/users/users.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UserSignupComponent } from './components/user-signup/user-signup.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { CustomerComponent } from './components/customer/customer.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import { CruisesComponent } from './components/cruises/cruises.component';
import {MatDatepickerModule} from '@angular/material/datepicker';





@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UsersComponent,
    UserLoginComponent,
    UserSignupComponent,
    HomeComponent,
    AdminComponent,
    CustomerComponent,
    NavbarComponent,
    ForgotPasswordComponent,
    CruisesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatButtonModule,
    MatOptionModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatTabsModule,
    MatDatepickerModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
