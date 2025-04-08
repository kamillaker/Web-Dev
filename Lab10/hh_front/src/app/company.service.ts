import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Company} from './model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL='http://localhost:8000/api';
  constructor(private client: HttpClient) { }
  getCompany():Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}/companies/`);
  }
}
