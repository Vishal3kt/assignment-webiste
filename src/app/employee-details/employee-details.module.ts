import { SidenavComponent } from './../Shared/sidenav/sidenav.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeDetailsRoutingModule } from './employee-details-routing.module';
import { EmployeeDetailsComponent } from './employee-details.component';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SharedModule } from '../Shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { EmergencyContactComponent } from './emergency-contact/emergency-contact.component';
import { BankingComponent } from './banking/banking.component';
import { NomineeComponent } from './nominee/nominee.component';

@NgModule({
  declarations: [
    EmployeeDetailsComponent,
    ProfileViewComponent,
    ProfileInfoComponent,
    PersonalDetailsComponent,
    EmergencyContactComponent,
    BankingComponent,
    NomineeComponent,
  ],
  imports: [
    CommonModule,
    EmployeeDetailsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class EmployeeDetailsModule { }
