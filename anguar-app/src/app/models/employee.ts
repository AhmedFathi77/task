export class Department{
  dep_id: number;
  dep_name: string;
}
export class Employee{
  id: number;
  name: string;
  age: number;
  salary: number;
  dep_id: number;
}

export class EmployerForm{
  name: string;
  age: number;
  salary: number;
  dep: number;
}
