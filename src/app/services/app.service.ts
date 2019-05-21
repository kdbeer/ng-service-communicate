import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  rawData = [];

  private list = new BehaviorSubject<string[]>([]);
  readonly list$ = this.list.asObservable();

  constructor() {}

  addNewList(list) {
    console.log(list);
    this.rawData.push(list);
    this.list.next(this.rawData);
  }

  removeList(list) {
    this.rawData = this.rawData.filter(v => v !== list);
    this.list.next(this.rawData);
  }
}
