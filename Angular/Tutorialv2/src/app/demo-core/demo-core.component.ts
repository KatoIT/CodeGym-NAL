import {Component, OnInit} from '@angular/core';
import {BehaviorSubject, ReplaySubject, Subject} from "rxjs";

@Component({
  selector: 'app-demo-core',
  templateUrl: './demo-core.component.html',
  styleUrls: ['./demo-core.component.css']
})
export class DemoCoreComponent implements OnInit {
  // subject = new Subject();
  // second = 1;
  // subject = new ReplaySubject(100, 2000 /* windowTime */);
  subject = new BehaviorSubject(0);

  constructor() {
  }

  ngOnInit(): void {
    /*** BehaviorSubject ***/
    this.subject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });

    this.subject.next(1);
    this.subject.next(2);

    this.subject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });

    this.subject.next(3);
    /*** ReplaySubject ***/
    // this.subject.subscribe({
    //   next: (v) => console.log(`observerA: ${v}`)
    // });
    //
    // let i = 1;
    // const inter = setInterval(() => this.subject.next(i++), 200);
    //
    // setTimeout(() => {
    //   this.subject.subscribe({
    //     next: (v) => console.log(`observerB: ${v}`)
    //   });
    // }, 2000);
    // setTimeout(()=>clearInterval(inter), 3000)
    /*** Subject ***/
    // console.log('Ok');
    //
    // this.subject.subscribe({
    //   next: (v) => console.log(`One second has passed ${v}`)
    // });
    //
    // const i = setInterval(() => {
    //   console.log(`${this.second}`);
    //   this.second++;
    // }, 1000)
    //
    // setTimeout(() => {
    //   this.subject.next(4),
    //     clearInterval(i);
    // }, 4000);

  }


}
