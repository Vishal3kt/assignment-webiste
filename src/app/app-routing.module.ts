import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'employee-dashboard', loadChildren: () => import('./employee-dashboard/employee-dashboard.module').then(m => m.EmployeeDashboardModule) },
  { path: 'employee-details', loadChildren: () => import('./employee-details/employee-details.module').then(m => m.EmployeeDetailsModule) },
  { path: '**', redirectTo: 'employee-dashboard', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
