import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavService {
  input: string = '';
  inputSearchChanged = new Subject<string>();

  constructor() { }


}
