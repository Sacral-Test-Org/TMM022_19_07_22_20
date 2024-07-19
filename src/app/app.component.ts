import { Component, OnInit } from '@angular/core';
import { FormInitializationService } from './services/form-initialization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TMM022_fmb';

  constructor(private formInitializationService: FormInitializationService) {}

  ngOnInit(): void {
    this.maximizeWindow();
    this.setTitle('T K A P - [IS]');
    this.formInitializationService.initializeForm();
  }

  setTitle(title: string): void {
    document.title = title;
  }

  maximizeWindow(): void {
    window.moveTo(0, 0);
    window.resizeTo(screen.width, screen.height);
  }
}
