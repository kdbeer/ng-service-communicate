import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-component-b',
  templateUrl: './component-b.component.html',
  styleUrls: ['./component-b.component.scss']
})
export class ComponentBComponent implements OnInit {
  list = [];

  constructor(private as: AppService) {}

  ngOnInit() {
    this.as.list$.subscribe(list => (this.list = list));
  }

  remove(list) {
    this.as.removeList(list);
  }
}
