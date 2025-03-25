import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  private selectedEmployee: any;

  setEmployee(employee: any) {
    this.selectedEmployee = employee;
  }

  getEmployee() {
    return this.selectedEmployee;
  }
}
