import { Component } from '@angular/core';
import { RocketInterface, RocketsService } from '../../services/rockets.service';
import { NgIf, NgFor } from '@angular/common';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'dashboard',
  standalone: true,
  imports: [NgIf, NgFor, SummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  rockets: Array<RocketInterface> = [];
  names: Array<string> = [];

  constructor(private service: RocketsService) {
    this.names = this.service.get();
    this.names.forEach(rocket => {
      this.service.loadOne(rocket).subscribe(dato => {
        this.rockets.push(dato);
      })
    })
    /*service.load().subscribe(datos => {
      this.rockets = datos;
    });*/
  }

  ngOnInit() {
    /*this.service.load().subscribe(datos => {
      this.rockets = datos;
    });*/
  }
}
