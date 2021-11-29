import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface Bundle {
  entry: Entry[];
}

interface Entry {
  resource: Patient;
  fullUrl: string;
}

interface Patient {
  id: string;
  resourceType: string;
  birthDate: string;
  gender: string;
  name: Name[];
}

interface Name {
  given: string[];
  family: string;
  prefix: string;
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent implements OnInit {
  data: any;
  response: Observable<Bundle>;
  error: any = null;

  @Input()
  baseUrl: string;

  ngOnChanges(changes: any) {
    console.log(changes.baseUrl.currentValue);
    this.search();
  }

  constructor(private client: HttpClient) {}

  ngOnInit(): void {
    console.log(this);
    this.search();
  }

  search(): void {
    this.error = null;
    this.response = this.client
      .get<Bundle>(`${this.baseUrl}Patient`, {
        params: {
          family: 'smith',
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
