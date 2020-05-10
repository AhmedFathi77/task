import { Component, OnInit, ViewChild, EventEmitter, Output, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployerForm, Department } from '../../models/employee';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-info-header',
  templateUrl: './info-header.component.html',
  styleUrls: ['./info-header.component.css']
})
export class InfoHeaderComponent implements OnInit {
  // info: Employee;
  @Output() addNewEmployee: EventEmitter<any> = new EventEmitter();
  @ViewChild('addForm') addForm: NgForm;
  @Input() count: number;
  // @Output() addNewEmployee: EventEmitter<any> = new EventEmitter();
  employerAddForm: EmployerForm;
  departments: Department[];

  constructor(private employeeService:ServicesService) { }

  ngOnInit(): void {
    console.log('===============>',this.count)
    this.employeeService.getDepartmens().subscribe(dep => {
      this.departments = dep;
      ///console.log('============>' ,this.dep_name,this.departments.filter((de) => de.dep_id == this.employer.dep_id), this.departments ,this.employer.dep_id);
    });
  }

  handleSubmit(){
    const employer =  this.addForm.value;
    console.log('new employer is :' , employer);
    this.addNewEmployee.emit(employer);
    this.reset(this.addForm);
    // this.Filter.emit(filter);
  }

  reset(addForm: NgForm) {
    addForm.resetForm();
  }
}
