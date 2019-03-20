import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimelineService { 
  publications: string[] = [];

  add(publication: string) {
    this.publications.push(publication);
  }

  clear() {
    this.publications = [];
  } 
}