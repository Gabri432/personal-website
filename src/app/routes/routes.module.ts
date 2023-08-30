import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { ProjectDisplayerComponent } from './my-projects/sub-components/project-displayer/project-displayer.component';
import { BlogComponent } from './blog/blog.component';



@NgModule({
  declarations: [
    HomeComponent,
    MyProjectsComponent,
    ProjectDisplayerComponent,
    BlogComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RoutesModule { }
