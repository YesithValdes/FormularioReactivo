import { Component, Input } from '@angular/core';
import { RocketInterface } from '../../services/rockets.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [NgClass],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {
  @Input() rocket: RocketInterface = {
    rocket_id: '',
    rocket_name: '',
    country: '',
    height: {meters: 0, feet: 0},
    flickr_images: [''],
  };

  isNegative() {
    return (this.rocket && this.rocket.height.meters < 50);
  }

  isPositive() {
    return (this.rocket && this.rocket.height.meters > 50);
  }
}
