import { Component, OnInit } from '@angular/core';
import { BackgroundService } from './background.service';

@Component({
  moduleId: module.id,
  selector: 'home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  { 
  private cssClass: String;
  constructor(private backgroundService: BackgroundService) {

  }

  ngOnInit(): void {
    this.cssClass = this.backgroundService.getBackgroundClass();
  }
}
