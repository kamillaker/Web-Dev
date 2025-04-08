import { Routes } from '@angular/router';
import{CompanyListComponent} from './company-list/company-list.component';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
import {TestComponent} from './test/test.component'
export const routes: Routes = [
  {path:'companies', component: CompanyListComponent, title: 'Companies'},
  {path: 'company/:id/vacancies', component: VacancyListComponent,title: 'Vacancies'},
  {path:'test', component: TestComponent, title: 'Test Component'}
];
