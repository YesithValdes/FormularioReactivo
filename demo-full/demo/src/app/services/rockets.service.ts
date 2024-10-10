import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let rockets: Array<string> = ['falcon1'];
let serviceUrl: string = 'https://api.spacexdata.com/v3/rockets';

export interface RocketInterface {
  rocket_id: string;
  rocket_name: string | any;
  country: string;
  height: { meters: number, feet: number};
  flickr_images: Array<string>;
}

@Injectable({
  providedIn: 'root'
})
export class RocketsService {

  constructor(private http: HttpClient) {
    this.load();
  }

  get() {
    return rockets.slice();
  }

  add(rocket: string) {
    rockets.push(rocket);
    return this.get();
  }

  remove(rocket: string) {
    rockets.splice(rockets.indexOf(rocket), 1);
    return this.get();
  }

  load() {
    return this.http.get<Array<RocketInterface>>(serviceUrl);
  }

  loadOne(name: string) {
    return this.http.get<RocketInterface>(serviceUrl+'/'+name);
  }
}
