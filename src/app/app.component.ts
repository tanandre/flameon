import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  url = 'https://hapi.fhir.org/baseR4/';
  
  ngOnInit(): void {
    console.log('test');
  }
}
