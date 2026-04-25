import { createAction, props } from "@ngrx/store";
import { Bucket } from "../../../models/bucket.model";




export const addToBucket = createAction(
  '[Bucket] Add',
  // props<{id:number,name:string}>()
  props<{payload:Bucket}>()
)


export const removeFromBucket = createAction(
  '[Bucket] Remove',
  props<{payload:Partial<Bucket>}>() //partial ka matlb bucket ki sare property pass nahi karunga only 1-2 property he pass karunga
)











