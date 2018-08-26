import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  description: string;
}

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  fSkills: Skills[] = [
    {name: 'Angular2/4/5', description: 'Built DMC Website from scratch on Angular 2 which was previously build on JSPs, Later On migrated it to Angular5'},
    {name: 'HTML5', description: 'Used HTML5 in DMC appliction, to render page'},
    {name: 'SCSS, CSS', description: 'Extensive hands-on on working with CSS and SCSS'},
    {name: 'Angular Flex, Angular Material', description: 'Used Bootstrap initially while building the site in angular2, updated it to use angular flex and material to be more in sync with angular ecosystem'},
    {name: 'Web Experimentation(A/B Tests)', description: 'Experience in web experimentation using Optimizely classic, OptimizelyX and Google Optimize'},
    {name: 'Web Analytics', description: 'Tracked and monitored hits on website using GTM and GA'},
    {name: 'SEO', description: 'Also worked on making site more search engine friendly'},
    {name: 'JSP,JSTL', description: 'As part of supporting existing website, has also worked with JSPs'},
  ];

  bSkills: Skills[] = [
    {name: 'Java', description: 'Created REST APIs, for angular front end, as well as maintained and worked on existing command for website built on JSPs'},
    {name: 'SpringBoot', description: 'Used SpringBoot to create a GateWay Apllication that helped angular application to communicate with WCS application. Also handles security.'},
    {name: 'Micro Services', description: 'Well familiar with micro services principles, and implemented it well while creating REST APIs'},
    {name: 'Rest APIs', description: 'Well familiar with REST API creation and best practises.'},
    {name: 'IBM: WebSphere Commerce 7/8', description: 'The application uses WCS as backend, is deployed on WCS Severs. Familiar with the way WCS works.'},
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
