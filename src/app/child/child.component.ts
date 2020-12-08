import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
@Input() loggedIn: boolean;
message: string;
name = 'EPAMER';
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    const loggedInValue = changes['loggedIn'];
    if (loggedInValue.currentValue === true) {
      this.message = 'Welcome back User!';
    }else {
      this.message = 'Please log in to continue..';
    }
  }

}
