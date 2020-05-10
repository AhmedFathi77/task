import { Component, OnInit , EventEmitter, Output, ViewChild, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmployerForm, Department } from 'src/app/models/employee';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Output() filter: EventEmitter<any> = new EventEmitter();
  @ViewChild('filterForm') filterForm: NgForm;
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
    const filter =  this.filterForm.value;
    console.log('Fiters are  :' , filter);
    this.filter.emit(filter);
    this.reset(this.filterForm);
    // this.Filter.emit(filter);
  }

  reset(addForm: NgForm) {
    addForm.resetForm();
  } 
}
