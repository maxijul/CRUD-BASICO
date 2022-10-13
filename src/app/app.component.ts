import { Component } from '@angular/core';
import { Employee } from './models/employee';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  employeeArray: Employee[] = [
    {id: 1, name: "Jorge", country: "Argentina"},
    {id: 2, name: "Angelica", country: "USA"},
    {id: 3, name: "Victor", country: "England"}
  ];

  selectedEmployee: Employee = new Employee();

  addOrEdit(): void{

    if(this.selectedEmployee.id === 0){
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }


    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee): void{
    this.selectedEmployee = employee
  }

  delete(){
    if (window.confirm("Are you sure you want to delete it?")){
      this.employeeArray = this.employeeArray.filter(element => element !== this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }
  }

}
