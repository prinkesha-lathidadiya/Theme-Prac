import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
// import { MultipurposeComponent } from './components/pages/multipurpose/multipurpose.component';
// import { OurTeamComponent } from './components/pages/our-team/our-team.component';
// import { DesignSkillsComponent } from './components/pages/design-skills/design-skills.component';
// import { ContactComponent } from './components/pages/contact/contact.component';
// import { ReservationComponent } from './components/pages/reservation/reservation.component';
// import { AnythingComponent } from './components/pages/anything/anything.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FullLayoutComponent,
    EmptyLayoutComponent,
    DashboardComponent,
    HeaderComponent,
    SideBarComponent,
    ForgetPasswordComponent,
    // MultipurposeComponent,
    // OurTeamComponent,
    // DesignSkillsComponent,
    // ContactComponent,
    // ReservationComponent,
    // AnythingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
