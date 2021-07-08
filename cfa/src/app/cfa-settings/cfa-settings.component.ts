import { Component, OnInit, OnDestroy } from '@angular/core';
import { CfaDatabaseService, Cat } from '../cfa-database.service';
import { Subscription } from 'rxjs';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-cfa-settings',
  templateUrl: './cfa-settings.component.html',
  styleUrls: ['./cfa-settings.component.scss']
})
export class CfaSettingsComponent implements OnInit, OnDestroy {
  subs: Subscription[] = [];
  currentCat: Cat = new Cat();
  name: FormControl = new FormControl();
  min_time: FormControl = new FormControl();
  expected_time: FormControl = new FormControl();

  private dirty: boolean = false;

  constructor(public database : CfaDatabaseService)
  {
    this.subs.push(database.currentCat.subscribe ( (item:Cat) => this.set_cat(item) ) );
  }

  ngOnInit(): void {
    this.subs.push(this.name.valueChanges.subscribe(value => this.on_change() ) );
    this.subs.push(this.min_time.valueChanges.subscribe(value => this.on_change() ) );
    this.subs.push(this.expected_time.valueChanges.subscribe(value => this.on_change() ) );
  }

  ngOnDestroy() 
  {
    this.subs.forEach(sub => sub.unsubscribe() );
    if (this.dirty) this.database.update(this.currentCat);
  }

  set_cat(cat: Cat)
  {
    this.currentCat = cat;
    this.name.setValue( cat.name );
    this.min_time.setValue( cat.min_time );
    this.expected_time.setValue( cat.expected_time );
  }

  on_change()
  {
      this.currentCat.name = this.name.value;
      this.currentCat.min_time = this.min_time.value;
      this.currentCat.expected_time = this.expected_time.value;
      this.dirty = true;
  }

}
