import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { SummaryComponent } from './components/summary/summary.component';
import { RocketsService, RocketInterface } from './services/rockets.service';
import { ManageComponent } from "./components/manage/manage.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SummaryComponent, ManageComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo2';

  constructor() {
  }
}
