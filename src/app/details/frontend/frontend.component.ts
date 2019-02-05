import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  description: string;
}

@Component({
  selector: 'app-frontend',
  templateUrl: './frontend.component.html',
  styleUrls: ['./../details.component.scss']
})
export class FrontendComponent implements OnInit {

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

  panelOpenState = true;
  fdata: Skills[];

  constructor() { 
    this.fdata = this.fSkills.slice();
  }

  ngOnInit() {
  }

}
