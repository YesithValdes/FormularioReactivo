import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RocketsService } from '../../services/rockets.service';
import { NgFor } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Recoverable } from 'repl';

@Component({
  selector: 'manage',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './manage.component.html',
  styleUrl: './manage.component.css'
})
export class ManageComponent {
  names: Array<string> = [];
  //name: string = '';
  form: FormGroup;

  constructor(private service: RocketsService) {
    this.names = this.service.get();

    this.form = new FormGroup({
      name: new FormControl('',[Validators.required])
    });
  }

  add() {
    //this.names = this.service.add(this.name);
    //this.name = '';
    if (this.form.valid) {
      const name = this.form.get('name')?.value;
      this.names = this.service.add(name);
      this.form.reset(); // Limpia el campo del formulario
    }
  }

  remove(name: string) {
    this.names = this.service.remove(name);
  }
}
