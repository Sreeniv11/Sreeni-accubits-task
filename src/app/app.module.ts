import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './login/formelements/email/email.component';
import { PasswordComponent } from './login/formelements/password/password.component';
import { SubmitComponent } from './login/formelements/submit/submit.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './home/header/header.component';
import { HomeSectionOneComponent } from './home/home-section-one/home-section-one.component';
import { KeyFeaturesComponent } from './home/key-features/key-features.component';
import { SecureSectionComponent } from './home/secure-section/secure-section.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    PasswordComponent,
    SubmitComponent,
    HomeComponent,
    HeaderComponent,
    HomeSectionOneComponent,
    KeyFeaturesComponent,
    SecureSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,NgbModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
