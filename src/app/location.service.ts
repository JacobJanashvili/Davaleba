import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class LocationService {
  city=''
  api_key = '587fa181d1864675b290eefe313ec498';
  url = `https://ipgeolocation.abstractapi.com/v1/?api_key=${this.api_key}`;
  constructor(private http: HttpClient) {}
  getLocation() {
    this.http.get(this.url).subscribe((res) => {
      console.log(res);
    });
  }
}
