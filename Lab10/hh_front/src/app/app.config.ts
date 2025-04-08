import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import{CompanyListComponent} from './company-list/company-list.component';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {TestComponent} from './test/test.component'

const routes: Routes = [
  {path:'companies', component: CompanyListComponent},
  {path: 'company/:id/vacancies', component: VacancyListComponent},
  {path:'test', component: TestComponent}
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient()
  ]
};
