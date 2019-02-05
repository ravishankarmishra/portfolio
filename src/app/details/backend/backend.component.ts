import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  description: string;
}

@Component({
  selector: 'app-backend',
  templateUrl: './backend.component.html',
  styleUrls: ['./../details.component.scss']
})
export class BackendComponent implements OnInit {

  bSkills: Skills[] = [
    {name: 'Java', description: 'Created REST APIs, for angular front end, as well as maintained and worked on existing command for website built on JSPs'},
    {name: 'SpringBoot', description: 'Used SpringBoot to create a GateWay Apllication that helped angular application to communicate with WCS application. Also handles security.'},
    {name: 'Micro Services', description: 'Well familiar with micro services principles, and implemented it well while creating REST APIs'},
    {name: 'Rest APIs', description: 'Well familiar with REST API creation and best practises.'},
    {name: 'IBM: WebSphere Commerce 7/8', description: 'The application uses WCS as backend, is deployed on WCS Severs. Familiar with the way WCS works.'},
  ];

  panelOpenState = true;
  bData: Skills[];
  constructor() {
    this.bData = this.bSkills.slice();
   }

  ngOnInit() {
  }

}
