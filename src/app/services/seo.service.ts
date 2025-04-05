import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  	private seoDataUrl = 'assets/data/seo.json';

    constructor(
		private titleService: Title,
		private metaService: Meta,
		private http: HttpClient
 	) {}

    loadSeoData(): Observable<any> {
    	return this.http.get<any>(this.seoDataUrl);
    }

  	setTitle(title: string): void {
    	this.titleService.setTitle(title);
  	}

	  updateSeoTags(metaData: any): void {
		this.setTitle(metaData.title);
		this.setMetaTags(metaData);
	}

	setMetaTags(metaData: any): void {
		this.setMetaTag('description', metaData.description);
		this.setMetaTag('keywords', metaData.keywords);
		this.setMetaTag('robots', metaData.robots);
		this.setMetaTag('author', metaData.author);

		this.setOpenGraphTags(metaData);
		this.setTwitterCardTags(metaData);
	}

	private setMetaTag(name: string, content: string): void {
		this.metaService.updateTag({ name, content });
	}

	private setOpenGraphTags(metaData: any): void {
		this.setMetaTag('og:title', metaData.title);
		this.setMetaTag('og:description', metaData.description);
		this.setMetaTag('og:image', this.convertToFullUrl(metaData.image));
		this.setMetaTag('og:url', metaData.url);
	}

	private setTwitterCardTags(metaData: any): void {
		this.setMetaTag('twitter:card', metaData.twitterCard);
		this.setMetaTag('twitter:description', metaData.description);
		this.setMetaTag('twitter:image', this.convertToFullUrl(metaData.image));
		this.setMetaTag('twitter:title', metaData.title);
		this.setMetaTag('twitter:url', metaData.url);
	}

	private convertToFullUrl(relativeUrl: string): string {
		return window.location.origin + relativeUrl;
	}
}
