import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Carpart } from './carpart.model';

@Injectable()
export class CarpartService {
  selectedCarpart: Carpart;
  carparts: Carpart[];
  readonly baseURL = 'http://localhost:3000/carparts';

  constructor(private http: HttpClient) { }

  postCarpart(parts: Carpart) {
    return this.http.post(this.baseURL, parts);
  }

  getCarpartList() {
    return this.http.get(this.baseURL);
  }

  putCarpart(parts: Carpart) {
    return this.http.put(this.baseURL + `/${parts._id}`, parts);
  }

  deleteCarpart(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
