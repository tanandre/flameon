export interface Bundle {
  entry: Entry[];
}

export interface Entry {
  resource: Patient;
  fullUrl: string;
}

export interface Patient {
  id: string;
  resourceType: string;
  birthDate: string;
  gender: string;
  name: Name[];
}

export interface Name {
  given: string[];
  family: string;
  prefix: string;
}
