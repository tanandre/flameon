import { Component, Input } from '@angular/core';
import { Entry } from '../fhir';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
})
export class PatientsComponent {
  @Input()
  entries: Entry[];
}
