import { Component, OnInit, Input, ViewChild, EventEmitter, Output } from '@angular/core';
import { Employee, Department, EmployerForm } from '../../models/employee';
import { NgForm } from '@angular/forms';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  @Input() employer: Employee;
  @Output() editEmployee: EventEmitter<any> = new EventEmitter();
  @Output() deleteEmployee: EventEmitter<any> = new EventEmitter();
  @ViewChild('editForm') editForm: NgForm;
  departments: Department[];
  dep_name: string;
  display='none'; //default Variable


  employerEditForm: EmployerForm;
  constructor(private employeeService:ServicesService) {
  }

  ngOnInit(): void {
    this.employeeService.getDepartmens().subscribe(dep => {
      this.departments = dep;
      this.dep_name = this.departments.filter((de) => de.dep_id === this.employer.dep_id)[0].dep_name;
      ///console.log('============>' ,this.dep_name,this.departments.filter((de) => de.dep_id == this.employer.dep_id), this.departments ,this.employer.dep_id);
    });
    
    this.employerEditForm = {
      name: this.employer.name,
      salary: this.employer.salary,
      age: this.employer.age,
      dep:  this.employer.dep_id,
    };
    // setTimeout( () => {
    //   this.editForm.setValue(employerEditForm);
    // });
    console.log('employer are :' , this.employerEditForm);
  }

  reset(editForm: NgForm) {
    editForm.resetForm();
  }



  handleSubmit(){
    console.log('edited employer are :' , this.editForm.value);
    this.editEmployee.emit({...this.editForm.value , id: this.employer.id});
    this.reset(this.editForm);
    this.closeModalDialog();
  }
  openModalDialog(){
    this.display='block'; //Set block css
  }

  closeModalDialog(){
    this.display='none'; //set none css after close dialog
  }
  handledeleteEmployee(){
    this.deleteEmployee.emit(this.employer.id);
  }

}
