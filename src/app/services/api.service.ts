import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.aviationstack.com/v1/flights';
  private apiKey = '' // Enter api key based on account created in aviationstack;

  constructor(private http: HttpClient) { }

  getData(iata: string): Observable<any> {
    const params = new HttpParams()
      .set('access_key', this.apiKey)
      .set('flight_iata', iata)

    return this.http.get(this.apiUrl, { params });
  }
}
