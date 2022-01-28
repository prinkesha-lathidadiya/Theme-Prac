import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ReservationComponent } from './reservation/reservation.component';
import { AnythingComponent } from './anything/anything.component';
import { ContactComponent } from './contact/contact.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { MultipurposeComponent } from './multipurpose/multipurpose.component';
import { DesignSkillsComponent } from './design-skills/design-skills.component';


@NgModule({
  declarations: [
    ReservationComponent,
    AnythingComponent,
    ContactComponent,
    OurTeamComponent,
    MultipurposeComponent,
    DesignSkillsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
