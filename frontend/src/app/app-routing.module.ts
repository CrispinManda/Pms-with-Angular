import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EmployeeDashboardComponent } from './employee-dashboard/employee-dashboard.component';
import { SingleEmployeeComponent } from './single-employee/single-employee.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LandingHeroComponent } from './landing-hero/landing-hero.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: ''},
  {path: '', component: LandingHeroComponent},
  {path: 'login',component:  LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'employee', component: EmployeeDashboardComponent},
  {path: 'admin/:employee_id', component: SingleEmployeeComponent},
  {path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
