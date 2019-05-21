import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-component-a',
  templateUrl: './component-a.component.html',
  styleUrls: ['./component-a.component.scss']
})
export class ComponentAComponent implements OnInit {
  listName: string;

  constructor(private as: AppService) {}

  ngOnInit() {}

  addNewList() {
    if (this.listName === '') {
      return;
    }

    this.as.addNewList(this.listName);
    this.listName = '';
  }
}
