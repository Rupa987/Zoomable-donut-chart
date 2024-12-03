import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ChartData } from './chart.data';

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  private jsonDataUrl = 'assets/data/chart.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<ChartData[]> {
    return this.http.get<ChartData[]>(this.jsonDataUrl);
  }
}
