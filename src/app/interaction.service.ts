import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class InteractionService {

  private _messageSource = new Subject<string>();
  managerMessage$ = this._messageSource.asObservable();

  constructor() {}
  sendMessage(message: string) {
    this._messageSource.next(message);
  }
}
