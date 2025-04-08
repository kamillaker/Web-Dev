import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // To access route parameters
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../model';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css'],
  imports:[CommonModule]
})
export class VacancyListComponent implements OnInit {
  vacancies: Vacancy[] = [];
  companyId: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private _vacancyService: VacancyService
  ) {}

  ngOnInit(): void {
    // Get companyId from route parameters
    this.companyId = this.route.snapshot.paramMap.get('id');
    if (this.companyId) {
      this.getVacancies(this.companyId);
    }
  }

  // Fetch vacancies for the company
  getVacancies(companyId: string): void {
    this._vacancyService.getVacancy(companyId).subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }
}
