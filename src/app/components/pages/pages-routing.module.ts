import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnythingComponent } from './anything/anything.component';
import { ContactComponent } from './contact/contact.component';
import { DesignSkillsComponent } from './design-skills/design-skills.component';
import { MultipurposeComponent } from './multipurpose/multipurpose.component';
import { OurTeamComponent } from './our-team/our-team.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path: '', component: MultipurposeComponent},
  {path:'mutipurpose', component: MultipurposeComponent,},
  {path:'contact', component: ContactComponent,},
  {path:'out-team', component: OurTeamComponent,},
  {path:'reservation', component: ReservationComponent,},
  {path:'design-skills', component: DesignSkillsComponent,},
  {path:'anything', component: AnythingComponent,},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
