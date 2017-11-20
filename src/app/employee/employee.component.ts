import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  name:string;
  title:string;

  constructor() { 
    console.log('Constructor Invoked');
  }

  ngOnInit() {

    console.log('ngOnInit - Message Property Initialized');
    this.name='Abhishek';
    this.title='Mr.';
  }

}
