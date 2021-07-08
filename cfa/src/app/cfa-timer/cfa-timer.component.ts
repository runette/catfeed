import { Component, OnInit, OnDestroy } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {ProgressSpinnerMode} from '@angular/material/progress-spinner';
import {CfaDatabaseService, Cat} from '../cfa-database.service';
import {Subscription, interval} from 'rxjs'

@Component({
  selector: 'app-cfa-timer',
  templateUrl: './cfa-timer.component.html',
  styleUrls: ['./cfa-timer.component.scss']
})
export class CfaTimerComponent implements OnInit, OnDestroy {
  color: ThemePalette = 'warn';
  mode: ProgressSpinnerMode = 'determinate';
  value = 50;
  currentsub: Subscription;
  intsub: Subscription;
  currentCat: Cat = new Cat();

  constructor(public database : CfaDatabaseService)
  {
    this.currentsub = database.currentCat.subscribe ( (item:Cat) => this.set_cat(item) )
    const timer = interval(1000);
    this.intsub = timer.subscribe(item => this.update_spinner())
  }

  ngOnInit(): void {
  }

  ngOnDestroy() 
  {
    this.currentsub.unsubscribe();
    this.intsub.unsubscribe();
  }

  update_spinner()
  {
    this.value = (Date.now() / 1000 - this.currentCat.feed.seconds) / (this.currentCat.expected_time * 60) * 100;
    if (this.value < this.currentCat.min_time/this.currentCat.min_time * 100) {
      this.color = 'warn';
    } else {
      this.color = 'primary';
    }
  }

  feed_cat()
  {
    this.currentCat.feed.seconds = Date.now() / 1000;
    this.database.update(this.currentCat);
    this.update_spinner();
  }

  set_cat(cat:Cat)
  {
    this.currentCat = cat;
    this.update_spinner();
  }

}
