import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { Blog } from '../../models/blog';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
  imports: [RouterModule, NgFor, MatCardModule]
})
export class BlogComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getBlogPosts().subscribe((data: Blog[]) => {
      this.blogs = data;
    });
  }
}
