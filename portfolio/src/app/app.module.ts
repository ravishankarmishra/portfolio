import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsComponent } from './details/details.component';
import { FrontendComponent } from './details/frontend/frontend.component';
import { BackendComponent } from './details/backend/backend.component';
import { ProjectsComponent } from './details/projects/projects.component';


const appRoutes: Routes = [
  { path: 'app-landing-page', component: LandingPageComponent },
  { path: 'app-details', component: DetailsComponent },
  { path: '',
    redirectTo: '/app-landing-page',
    pathMatch: 'full'
  },
  { path: '**', component: LandingPageComponent }

];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    LandingPageComponent,
    DetailsComponent,
    FrontendComponent,
    BackendComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    FlexLayoutModule,
    MatTabsModule,
    MatExpansionModule,
    MatIconModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash: true }// <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
