import { CommonModule, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  imports: [MatIconModule, NgIf, CommonModule]
})
export class HeroComponent {
  
	constructor(public dataService: DataService) {
    
  }
}
