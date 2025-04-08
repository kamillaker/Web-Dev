import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Vacancy} from './model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL='http://localhost:8000/api';
  constructor(private client: HttpClient) { }
  getVacancy(companyId: string): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/companies/${companyId}/vacancies/`);
  }
}
