import { Component, Signal } from '@angular/core';
import { Observable } from 'rxjs';
import { Grocery } from '../../../models/grocery.model';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { addToBucket, removeFromBucket } from '../../store/actions/bucket.action';
import { selectGroceries, selectGroceryByType } from '../../store/selectors/grocery.selectors';


@Component({
  selector: 'app-grocery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grocery.component.html',
  styleUrl: './grocery.component.css'
})
export class GroceryComponent {

  // NgRx (aur reactive programming) mein jo variables Observables hote hain unke naam ke end mein hum $ lagate hain — ye ek naming convention hai, syntax ka part nahi.


  groceries$?:Observable<Grocery[]>;

  filteredGroceries$?:Observable<Grocery[]>;

  constructor(private store:Store<{groceries:Grocery[]}>){
    // this.groceries$ = store.select("groceries")
    this.groceries$ = store.select(selectGroceries)
    // this.groceries$ = store.select(selectGroceryByType)

    // store.select(selectGroceryByType).subscribe(data=>{
    //   console.log("data 2",data)
    // })

  }


  onTypeChange(event: Event){
     const selectedType = (event.target as HTMLSelectElement).value
     if(selectedType) this.filteredGroceries$ = this.store.select(selectGroceryByType(selectedType))
     else this.filteredGroceries$ = undefined
  }


  increment(item:Grocery){
    const payload = {
      id:item.id,
      name:item.name,
      quantity:1
    }
    // this.store.dispatch({type:"Update",payload:payload})

    // this.store.dispatch(addToBucket({id:payload.id,name:payload.name}))
    this.store.dispatch(addToBucket({payload:payload}))

  }
  decrement(item:Grocery){
    const payload = {
      id:item.id,
    }

    this.store.dispatch(removeFromBucket({payload}))
  }

}
