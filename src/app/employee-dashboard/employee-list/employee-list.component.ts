import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
declare var bootstrap: any;

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  employees = [
    { id: '#65425', firstName: 'Pristia', lastName: 'Candra', email: 'pristia@gmail.com', phone: '+91 954123587', department: 'Communications', designation: 'Developer', },
    { id: '#65426', firstName: 'Hanna', lastName: 'Baptista', email: 'hanna@gmail.com', phone: '+91 954123587', department: 'Communications', designation: 'UI UX Designer', },
    { id: '#65427', firstName: 'David', lastName: 'Miller', email: 'david@gmail.com', phone: '+91 954123588', department: 'Engineering', designation: 'Backend Developer', },
    { id: '#65428', firstName: 'Sophia', lastName: 'Fernandez', email: 'sophia@gmail.com', phone: '+91 954123589', department: 'Marketing', designation: 'Content Writer', },
    { id: '#65429', firstName: 'Michael', lastName: 'Clark', email: 'michael@gmail.com', phone: '+91 954123590', department: 'Finance', designation: 'Accountant', },
    { id: '#65430', firstName: 'Emma', lastName: 'Watson', email: 'emma@gmail.com', phone: '+91 954123591', department: 'HR', designation: 'HR Manager', }
  ];

  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {

  }

  openAddEmployee() {
    const offcanvasElement = document.getElementById('addEmployeeOffcanvas');
    const bsOffcanvas = new bootstrap.Offcanvas(offcanvasElement!);
    bsOffcanvas.show();
  }

  onEmployeeAdded(newEmployee: any) {
    this.employees.push(newEmployee);
  }

  goToProfile(emp: any) {
    this.employeeService.setEmployee(emp);
    this.router.navigate(['/employee-details/personal-details']);
  }

}