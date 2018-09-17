import { Component, OnInit } from '@angular/core';

export interface Skills {
  name: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./../details.component.scss']
})
export class ProjectsComponent implements OnInit {

  bSkills: Skills[] = [
    {name: '', description: 'Design mockup web pages using HTML5, CSS3, Media Queries and JavaScript'},
    {name: '', description: 'Code and Develop single-page application using Angular4, Typescript, HTML5 and CSS3'},
    {name: '', description: 'Follow Mobile first Approach and giving priority to responsive design'},
    {name: '', description: 'Develop browse/search page and display all movie covers with animations in a striking way'},
    {name: '', description: 'Create a highly Responsive reusable cart module to display movies in customer wishlist'},
    {name: '', description: 'Follow Agile processes and continuously develop the application in sprints'},
    {name: '', description: 'Implement Test-driven development and update the Angular test cases at the end of sprint'},
    {name: '', description: 'Code and maintain the complex business logic'},
    {name: '', description: 'Identify and resolve device specific defects'},
    {name: '', description: 'Implement Optimizely to provide A/B testing'},
  ];

  fSkills: Skills[] = [
    {name: 'Support Disney Movie Club', description: 'Supported member website built on JSPs. Implemented new features as and when required by client. Fixed bugs. Refactored code to make it more efficient.'},
    {name: 'Acquisition Redesign', description: 'Built acquisition Website from scratch on Angular 2 which was previously build on JSPs. This involved transforming UX wireframes to actual designs. Also worked on developing REST APIs to be consumed on frontend and integrated them.'},
    {name: 'OneId Integration', description: 'Before OneId, DMC had its own login and session management. As part of oneId integration, implemented common login and session management which was being used by other disney group websites.'},
    {name: 'Acquisition Refresh', description: 'updated UI once again, upgraded codebase from angular 2 to angular 5, Removed bootstrap and used angular flex, made the website more light and fast.'},
    {name: 'Member Mini Refresh', description: 'updated UI to give it more modern and fresh feel, majorly CSS overhaul.'},
    {name: 'Member Redesign', description: 'Moving the old website built on JSPs to angular, includes major design and functionality overhaul.'},
  ];

  panelOpenState = true;
  bData: Skills[];
  fdata: Skills[];

  constructor() { 
    this.bData = this.bSkills.slice();
    this.fdata = this.fSkills.slice();
  }

  ngOnInit() {
  }

}
