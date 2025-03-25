import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
declare var bootstrap: any;

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent {
  editForm: FormGroup;
  personalDetails = [
    { label: 'Name', key: 'name' },
    { label: 'Date of Birth', key: 'dob' },
    { label: 'Nationality', key: 'nationality' },
    { label: 'Aadhar Number', key: 'aadhar' },
    { label: 'Father Name', key: 'fatherName' },
    { label: 'Father DOB', key: 'fatherDob' },
    { label: 'Religion', key: 'religion' },
    { label: 'Pan Number', key: 'pan' }
  ];

  constructor(private fb: FormBuilder) {
    this.editForm = this.fb.group({
      name: ['Kevin John'],
      dob: ['08 Nov 1996'],
      nationality: ['Indian'],
      aadhar: ['8524 8962 1235'],
      fatherName: ['John'],
      fatherDob: ['15 Jan 1982'],
      religion: ['Hindu'],
      pan: ['HPBT8813J'],
      motherName: [''],
      motherDob: [''],
      maritalStatus: [''],
      cast: [''],
      category: [''],
      passport: [''],
      disability: [''],
      passportIssueDate: ['']
    });
  }

  ngOnInit(): void { }

  openEditOffcanvas() {
    const offcanvasElement = document.getElementById('editOffcanvas');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement!);
    bsOffcanvas.show();
  }

  updateDetails() {

    const offcanvasElement = document.getElementById('editOffcanvas');
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement!);
    bsOffcanvas.hide();
  }
}
