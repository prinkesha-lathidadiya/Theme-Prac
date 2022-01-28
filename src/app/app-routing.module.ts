import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
// import { ForgetPasswordComponent } from './components/auth/forget-password/forget-password.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegistrationComponent } from './components/auth/registration/registration.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeaderComponent } from './components/header/header.component';
// import { SideBarComponent } from './components/side-bar/side-bar.component';
import { EmptyLayoutComponent } from './layout/empty-layout/empty-layout.component';
import { FullLayoutComponent } from './layout/full-layout/full-layout.component';



const routes: Routes = [
  {
    path:'',
    component:EmptyLayoutComponent,
    children:[
      {
        path:'',
        component:LoginComponent,
      },
      {
        path:'login',
        component:LoginComponent,
      },
      {
        path:'register',
        component:RegistrationComponent,
      },
      {
        path:'forget-password',
        component:ForgetPasswordComponent,
      },
    ],
  },
  {
    path:'app',
    component:FullLayoutComponent,
    children:[
      {
        path:'dashboard',
        component:DashboardComponent,
      },
      {
        path:'header',
        component:HeaderComponent,
      },
      // {
      //   path:'side-bar',
      //   component:SideBarComponent,
      // },
    ],
  },

  { path: '',
  component: DashboardComponent,
   loadChildren: () => import('./components/pages/pages.module').then(x => x.PagesModule) },

  // path: '',
  //   component: LayoutComponent,
  //   loadChildren: () =>
  //     import('./pages/pages.module').then((m) => m.PagesModule),
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
