/*


[Button Click]
      |
      ▼
[dispatch(incrementAsync())]
      |
      ▼
[ Thunk (incrementAsync) ]
      |
      ▼
[ dispathRahul(startLoading()) ]
      |
      ▼
[ Reducer ]
 (loading = true)
      |
      ▼
[ setTimeout(7sec) ]
      |
      ▼
[ dispathRahul(increment()) ]
      |
      ▼
[ Reducer ]
 (count = count + 1)
      |
      ▼
[ dispathRahul(stopLoading()) ]
      |
      ▼
[ Reducer ]
 (loading = false)
      |
      ▼
[ UI (AppContent) ]
 (Displays updated count)
 (Displays loading false)



 */






 //--------------------------------------------------------------------------------------------------------------------------------


    

 /*
  

 [User clicks "Increment" button]
      |
      ▼
[dispatch(increment())]
      |
      ▼
[ Action ]
{
  type: "INCREMENT"
}
      |
      ▼
[ Reducer ]
(Root Reducer)
 (current state)
      |
      ▼
[ state = {
    count: count + 1
} ]
      |
      ▼
[ Store ]
      |
      ▼
[ React-Redux (useSelector) ]
      |
      ▼
[ UI (AppContent) ]
(Renders updated count)

 
 
 
 */