import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent {
  activeMenu: string = 'employee-list';
  showEmployees: boolean = true;

  setActive(menu: string): void {
    this.activeMenu = menu;
    if (menu !== 'employees') {
      this.showEmployees = false;
    }
  }

  toggleEmployees(): void {
    this.showEmployees = !this.showEmployees;
  }


}
