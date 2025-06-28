import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataViewComponent } from './components/data-view/data-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataViewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'flight-tracker';
}
