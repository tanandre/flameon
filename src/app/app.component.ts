import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://hapi.fhir.org/baseR4/';
  activeUrl: string;
  
  ngOnInit(): void {
    this.activeUrl = this.url;
  }

  search(url: string): void {
    this.activeUrl = url;
    console.log('search', url);
  }
}
