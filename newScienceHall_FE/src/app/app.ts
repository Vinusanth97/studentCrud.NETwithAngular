import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';
import { RouterOutlet } from '@angular/router';
import { Register } from './register/register';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
    standalone: true,  // VERY important
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('newScienceHall');
}
