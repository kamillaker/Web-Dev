import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CompanyListComponent} from './company-list/company-list.component';
import {VacancyListComponent} from './vacancy-list/vacancy-list.component';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],

  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
