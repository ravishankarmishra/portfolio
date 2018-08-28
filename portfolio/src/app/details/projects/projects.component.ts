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

  panelOpenState = true;
  bData: Skills[];

  constructor() { 
    this.bData = this.bSkills.slice();
  }

  ngOnInit() {
  }

}
