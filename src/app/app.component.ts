import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit{
  
  ngAfterViewInit(): void {
    this.childComponentRef.message = 'Message from Parent component';
  }
  title = 'Parent Component';
  title2 = 'Component Communication using Service'
  @ViewChild(ChildComponent) childComponentRef: ChildComponent;

  constructor(private _interactionService:InteractionService){}

  greetEmployee(){
    this._interactionService.sendMessage('Hello, Have a nice day!');
  }

  appreciateEmployee(){
    this._interactionService.sendMessage('You did a great job!');
  }
}
