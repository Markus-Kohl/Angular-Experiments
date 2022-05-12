import { Component, OnInit } from '@angular/core';
import { asapScheduler, asyncScheduler, of } from 'rxjs';
import { observeOn } from 'rxjs/operators';

@Component({
  selector: 'app-rx-js-schedulers',
  templateUrl: './rx-js-schedulers.component.html',
  styleUrls: ['./rx-js-schedulers.component.scss'],
})
export class RxJsSchedulersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  runAsync() {
    setTimeout(() => console.log('setTimeout callback', 0));
    Promise.resolve('Promise value').then(console.log);
    of('Stream value').pipe(observeOn(asyncScheduler)).subscribe(console.log);
  }
}
