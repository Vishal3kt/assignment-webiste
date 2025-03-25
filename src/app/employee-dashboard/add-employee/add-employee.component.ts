import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent {
  @Output() employeeAdded = new EventEmitter<any>();
  employeeForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.employeeForm = this.fb.group({
      salutation: [''],
      name: [''],
      mobile: [''],
      email: [''],
      aadhar: [''],
      gender: [''],
      institutions: [''],
      campus: [''],
      academicType: [''],
      faculty: [''],
      department: [''],
      designation: [''],
      grade: [''],
      employeeCategory: [''],
      employeeType: [''],
      reportingAuthority: ['']
    });
  }

  onSubmit() {
    const formValue = this.employeeForm.value;
    const newEmployee = {
      id: `#${Math.floor(Math.random() * 100000)}`,
      salutation: formValue.salutation,
      firstName: formValue.name.split(' ')[0] || '',
      lastName: formValue.name.split(' ').slice(1).join(' ') || '',
      email: formValue.email,
      phone: formValue.mobile,
      aadhar: formValue.aadhar,
      gender: formValue.gender,
      institution: formValue.institutions,
      campus: formValue.campus,
      academicType: formValue.academicType,
      faculty: formValue.faculty,
      department: formValue.department,
      designation: formValue.designation,
      grade: formValue.grade,
      employeeCategory: formValue.employeeCategory,
      employeeType: formValue.employeeType,
      reportingAuthority: formValue.reportingAuthority
    };

    this.employeeAdded.emit(newEmployee);
    this.employeeForm.reset();

    const offcanvasElement = document.getElementById('addEmployeeOffcanvas');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement!);
    bsOffcanvas?.hide();
  }
}