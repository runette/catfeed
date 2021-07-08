import { Component, OnInit, OnDestroy } from '@angular/core';
import { CfaDatabaseService, Cat } from '../cfa-database.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-cfa-details',
  templateUrl: './cfa-details.component.html',
  styleUrls: ['./cfa-details.component.scss']
})
export class CfaDetailsComponent implements OnInit {

  currentCat: Cat = new Cat();
  feed: Date = new Date();
  cats: Cat[] = [];
  subs: Subscription[] = [];

  constructor(public database : CfaDatabaseService)
  {
    this.subs.push( database.cats.subscribe( (item: Cat[]) => this.cats = item ) );
    this.subs.push( database.currentCat.subscribe ( (item:Cat) => this.set_cat(item) ) );
  }

  ngOnInit(): void {
  }

  ngOnDestroy() 
  {
    this.subs.forEach( sub => sub.unsubscribe() );
  }

  set_cat(cat:Cat)
  {
    this.currentCat = cat;
    this.feed = new Date( cat.feed.seconds * 1000 );
  }

  change_cat(id: String)
  {
    this.cats.forEach( (cat: Cat) => { if (cat.id === id) this.currentCat = cat; } );
    this.database.currentCat.next(this.currentCat);
  }

}
