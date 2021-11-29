import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Bundle } from './fhir';
import { catchError, retry } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  url = 'https://hapi.fhir.org/baseR4/';
  family: string = 'smith';
  given: string = '';

  data: any;
  response: Observable<Bundle>;
  error: any = null;

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    this.search(this.url);
  }

  search(url: string): void {
    this.error = null;


    this.response = this.client
      .get<Bundle>(`${url}Patient`, {
        params: {
          family: this.family,
          given: this.given,
        },
      })
      .pipe(
        catchError((err: any) => {
          this.error = err;
          return throwError(() => err);
        })
      );
  }
}
