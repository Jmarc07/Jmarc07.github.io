import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  featuredProject = {} as Project;
  projects: Project[] = [
    {
      id: 1,
      name: 'Project 1',
      summary: 'Project 1 summary',
      description: 'Project 1 description',
      projectLink: 'https://project1.com',
       githubLink: 'https://github.com/username/project1',
      pictures: ['assets/images/portfolio-preview.jpg'],
      tags: []
    }
    // Add more projects as needed
  ];

  constructor(private titleService: Title, private projectService: ProjectsService) {
    this.titleService.setTitle('Jean-marc Naounou - Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(0);
    this.projects = this.projectService.GetProjects();
  }
}
