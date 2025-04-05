import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import { Education } from '../models/education';
import { Blog } from '../models/blog';
import { Experience } from '../models/experience';
import { Project } from '../models/project';
import { Setup } from '../models/setup';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    private staticDataPath: string = 'assets/data/';

    private siteInfoSubject = new BehaviorSubject<Setup | null>(null);
    siteInfo$ = this.siteInfoSubject.asObservable();

    constructor(private http: HttpClient) {

    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(`${operation} failed: ${error.message}`);
            return of(result as T);
        };
    }

    getSiteInfo(){
        this.http.get<Setup>(`${this.staticDataPath}setup.json`).pipe(
            catchError(this.handleError<Setup>('getSiteInfo', {} as Setup))
        ).subscribe(data => {
            this.siteInfoSubject.next(data);
        });
    }

    getEducation(): Observable<Education[]>{
        return this.http.get<Education[]>(`${this.staticDataPath}education.json`).pipe(
            catchError(this.handleError<Education[]>('getEducation', []))
        );
    }

    getExperience(): Observable<Experience[]>{
        return this.http.get<Experience[]>(`${this.staticDataPath}experience.json`).pipe(
            catchError(this.handleError<Experience[]>('getExperience', []))
        );
    }

    getProjects(): Observable<Project[]>{
        return this.http.get<Project[]>(`${this.staticDataPath}projects.json`).pipe(
            catchError(this.handleError<Project[]>('getProjects', []))
        );
    }

    getBlogPosts(): Observable<Blog[]> {
        return this.http.get<Blog[]>(`${this.staticDataPath}blog.json`).pipe(
            catchError(this.handleError<Blog[]>('getBlogPosts', []))
        );
    }
}
