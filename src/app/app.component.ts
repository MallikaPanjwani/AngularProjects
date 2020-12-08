import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'Parent Component';
  title2 = 'Component Communication using Service';
  loggerFlag: boolean;
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;
  ngAfterViewInit(): void {
    this.childComponentRef.message = 'Message from Parent component';
  }
  constructor(private _interactionService: InteractionService) {}
  greetEmployee() {
    this._interactionService.sendMessage('Hello, Have a nice day!');
  }

  appreciateEmployee() {
    this._interactionService.sendMessage('You did a great job!');
  }
}
