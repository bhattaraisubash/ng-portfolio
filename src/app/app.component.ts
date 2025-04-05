import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./shared/header/header.component";
import { HeroComponent } from './features/hero/hero.component';
import { AboutComponent } from "./features/about/about.component";
import { ProjectsComponent } from "./features/projects/projects.component";
import { BlogComponent } from "./features/blog/blog.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { DataService } from './services/data.service';
import { SeoService } from './services/seo.service';

@Component({
	selector: 'app-root',
	imports: [
		RouterOutlet,
		HeaderComponent, 
		HeroComponent, 
		AboutComponent, 
		ProjectsComponent, 
		BlogComponent, 
		FooterComponent
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

	constructor(private dataService: DataService, private seoService: SeoService) {

	}

	ngOnInit(): void {
		this.dataService.getSiteInfo();
		this.seoService.loadSeoData().subscribe((seoData) => {
			this.seoService.updateSeoTags(seoData);
		});
	}
}
