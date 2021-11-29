import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

interface Bundle {
  entry: Entry[]
}

interface Entry {
  resource: Patient
  fullUrl: string
}

interface Patient {
  id: string;
  resourceType: string;
  birthDate: string;
  gender: string;
  name: Name[];
}

interface Name {
  given: string[]
  family: string,
  prefix: string
}

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})


export class PatientsComponent implements OnInit {
  data: any;
  response: Observable<Bundle>;

  constructor(private client: HttpClient) {
  }

  ngOnInit(): void {
    console.log(this);

    this.response = this.client.get<Bundle>("https://hapi.fhir.org/baseR4/Patient", {});
  }

}
