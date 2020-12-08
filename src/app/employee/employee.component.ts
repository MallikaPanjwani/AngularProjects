import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'app/interaction.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.managerMessage$
    .subscribe(
      message => {
        if (message === 'Hello, Have a nice day!') {
          alert('Good Morning sir');
        }else if (message === 'You did a great job!') {
      alert('Thank you sir');
        }
      }
    );
  }

}
