import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  imports: [NgFor]
})
export class ProjectsComponent implements OnInit{
	projects: Project[] = [];

	constructor(private dataService: DataService) {
		
	}

	ngOnInit(): void {
		this.dataService.getProjects().subscribe((projects: Project[]) => {
			this.projects = projects;
		});
	}
}
