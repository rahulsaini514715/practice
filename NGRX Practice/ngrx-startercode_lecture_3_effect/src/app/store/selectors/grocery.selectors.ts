import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Grocery } from "../../../models/grocery.model";




// export const selectGroceries = (state:{groceries:Grocery[]})=>state.groceries
export const selectGroceries = createFeatureSelector<Grocery[]>('groceries')


// export const selectGroceryByType = createSelector(
//   selectGroceries,
//   (state)=>{
//     console.log("select by type called")
//      return state.filter(item=>item.type === 'fruit')
//   }
// )

export const selectGroceryByType =(type:string)=> createSelector(
  selectGroceries,
  (state)=>state.filter(item=>item.type === type)
)
