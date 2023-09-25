import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "./redux-thunk/action/userAction";
function App() {
  const dispatch = useDispatch();
  const ListOfUser = useSelector(state => state.userList)
  console.log(ListOfUser);
  useEffect(()=>{
    dispatch(userAction())
  })
  return (
    <div className="App">
      <h1>Redux Thunk Tutorial</h1>
      <br/>
      <br/>
      <br/>
      
    </div>
  );
}

export default App;
