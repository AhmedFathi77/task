import { Component, OnInit } from '@angular/core';
import { Employee , Department  , EmployerForm} from '../../models/employee';
import { ServicesService } from '../../services/services.service';
@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.css']
})
export class EmployersComponent implements OnInit {
  employers: Employee[];
  departments: Department[];
  constructor(private employeeService:ServicesService) {}
  count: number;

  ngOnInit(){
    this.employeeService.getEmployees().subscribe(emps => {
      this.employers = emps;
      this.count = this.employers.length;
    });
    
  }

  addNewEmployee(emp:any){
    this.employeeService.addEmployee(emp).subscribe(employer => {
      this.employers.push(employer);
      this.count++;
    });
  }
  editEmployee(emp:any){
    // console.log("emp ==========>", emp);
    this.employeeService.editEmployee(emp).subscribe(employer => {
      const index = this.employers.findIndex((obj => obj.id === emp.id));
      this.employers[index] = emp;
      console.log("=====>", this.employers , employer);
    });
  }
  deleteEmployee(id:number){
    this.employeeService.deleteEmpoyee(id).subscribe(employer => {
      this.employers = this.employers.filter(emp => emp.id !== id);
      console.log("=====>", this.employers , employer);
      this.count--;
    });
  }
  filter(data:any){
      console.log('Fiters Works Fine' , data);
      this.employeeService.Filters(data).subscribe(res => {
        this.employers = res;
        this.count = this.employers.length;
      });
  }
}
