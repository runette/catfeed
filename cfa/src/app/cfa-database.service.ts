import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection,  AngularFirestoreDocument  } from '@angular/fire/firestore';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export class Cat { 
  id: string = "";
  name: string = "";
  feed: Timestamp = {seconds: 0, nanoseconds: 0};
  min_time: number = 0;
  expected_time: number = 0;

  equals(other: Cat)
  {
    return this.id == other.id;
  }
}

@Injectable({
  providedIn: 'root'
})
export class CfaDatabaseService {
  catCollection: AngularFirestoreCollection<Cat>;
  cats: Observable<Cat[]>;
  currentCat: BehaviorSubject<Cat> = new BehaviorSubject<Cat>( new Cat() );
  currentSub: Subscription = new Subscription();

  constructor(firestore: AngularFirestore) {
    this.catCollection = firestore.collection<Cat>('cats');
    this.cats = this.catCollection.valueChanges({idField: 'id'});
    let catstr = localStorage.getItem('cat') || "";
    let cat: Cat;
    try 
    {
      this.new_current( JSON.parse(catstr) as Cat);
    } catch
    {
      this.currentCat.next(  new Cat() );
    }
   }

   update(cat : Cat)
   {
     let record : AngularFirestoreDocument<Cat> = this.catCollection.doc(cat.id);
     record.update(cat);
     this.currentCat.next(cat);
   }

   new_current(cat: Cat)
   {
    this.currentSub.unsubscribe();
    let record : AngularFirestoreDocument<Cat> = this.catCollection.doc(cat.id);
    this.currentSub = record.valueChanges().subscribe( cat => { if (cat) this.currentCat.next(cat) } );
    localStorage.setItem("cat",JSON.stringify(cat));   
   }
}
