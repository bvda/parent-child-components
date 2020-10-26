import { Component, OnInit } from '@angular/core';
import { Counter } from '../shared/counter.model';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {

  childComponent1: Counter = {
    count: 0,
    name: 'childComponent1'
  }

  childComponent2: Counter = {
    count: 0,
    name: 'childComponent2'
  }

  sum: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onChildButtonClicked(counter: Counter) {
    this.sum += 1;
    if(counter.name === this.childComponent1.name) {
      this.childComponent1.count = counter.count
    }
  }
}
