import {Component, OnInit} from '@angular/core';
import {Company} from '../model';
import {CompanyService} from '../company.service';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-company-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  constructor(private _companyService: CompanyService ) { }

  ngOnInit(){
    this.getCompanies();
  }
  getCompanies(){
    this._companyService.getCompany().subscribe((companies) => {
      this.companies = companies});
  }
}
