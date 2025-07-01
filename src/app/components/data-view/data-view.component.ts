import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-data-view',
  standalone: true,
  imports: [CommonModule, FormsModule, MatIconModule, MatInputModule, MatFormFieldModule, MatButtonModule],
  templateUrl: './data-view.component.html',
  styleUrl: './data-view.component.scss'
})
export class DataViewComponent {
  flightIata: string= '';
  airlineName: string = '';
  aircraftIata: string = '';
  departureAirport: string = '';
  arrivalAirport: string = '';
  error: string = '';
  loading: boolean = false;

  constructor(private apiService: ApiService) {}

  searchFlight(): void {
    this.airlineName = '';
    this.aircraftIata = '';
    this.departureAirport = '';
    this.arrivalAirport = '';
    this.error = '';
    this.loading = true;

    this.apiService.getData(this.flightIata).subscribe({
      next: (response) => {
        const flight = response?.data?.[0];
        if (flight) {
          this.airlineName = flight.airline?.name || 'N/A';
          this.aircraftIata = flight.flight?.iata || 'N/A';
          this.departureAirport = flight.departure?.airport || 'N/A';
          this.arrivalAirport = flight.arrival?.airport || 'N/A';
        } else {
          this.error = 'No data found';
        }
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch data';
        this.loading = false;
      }
    });
  }
}
