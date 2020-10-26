import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Counter } from '../shared/counter.model';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  @Output()
  buttonClicked = new EventEmitter<Counter>();

  @Input()
  counter: Counter = {
    count: 0,
    name: null,
  }

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClicked() {
    this.counter.count += 1
    this.buttonClicked.emit(this.counter)
  }
}
