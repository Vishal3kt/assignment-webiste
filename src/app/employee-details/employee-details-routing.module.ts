import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { EmployeeDetailsComponent } from './employee-details.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { BankingComponent } from './banking/banking.component';
import { NomineeComponent } from './nominee/nominee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDetailsComponent,
    children: [
      { path: '', redirectTo: 'personal-details', pathMatch: 'full' },
      { path: 'personal-details', component: PersonalDetailsComponent },
      { path: 'emergency-contact', component: EmergencyContactComponent },
      { path: 'banking', component: BankingComponent },
      { path: 'nominee', component: NomineeComponent },
      { path: 'qualification', component: PersonalDetailsComponent },
      { path: 'experience', component: EmergencyContactComponent },
      { path: 'salary-benefits', component: BankingComponent },
      { path: 'employment-details', component: NomineeComponent },
      { path: 'exit-details', component: PersonalDetailsComponent },
      { path: 'documents', component: EmergencyContactComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeDetailsRoutingModule { }