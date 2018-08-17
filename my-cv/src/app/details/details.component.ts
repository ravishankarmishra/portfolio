import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  description: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})

export class DetailsComponent implements OnInit {

  fSkills: Skills[] = [
    {name: 'Angular2/4/5', description: 'dummy description1'},
    {name: 'HTML5', description: 'dummy description2'},
    {name: 'SCSS, CSS', description: 'dummy description3'},
    {name: 'Angular Flex, Angular Material', description: 'dummy description4'},
    {name: 'Web Experimentation(A/B Tests)', description: 'dummy description5'},
    {name: 'Web Analytics', description: 'dummy description2'},
    {name: 'SEO', description: 'dummy description2'},
    {name: 'JSP,JSTL', description: 'dummy description2'},
  ];

  bSkills: Skills[] = [
    {name: 'Java', description: 'dummy description1'},
    {name: 'SpringBoot', description: 'dummy description2'},
    {name: 'Micro Services', description: 'dummy description3'},
    {name: 'Rest APIs', description: 'dummy description4'},
    {name: 'IBM: WebSphere Commerce 7/8', description: 'dummy description5'},
  ];

  panelOpenState = true;
  data: Skills[];
  bData: Skills[];

  constructor() { 
    this.data = this.fSkills.slice();
    this.bData = this.bSkills.slice();
  }

  ngOnInit() {
  }

}
