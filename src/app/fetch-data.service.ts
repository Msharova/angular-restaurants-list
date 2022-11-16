import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  fetchData() {
    return this.http.get('assets/establishment-data.json'); //fetching data from local json file
  }
  constructor(private http: HttpClient) { }
}