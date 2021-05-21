import React, { useContext } from "react";
import { MyContext } from "../App";

export default function SearchEmoji() {
  const {setSearchValue} =useContext(MyContext)
  return (
    <div className="search" style={{margin:"0 auto",textAlign:"center"}}>
      <input onChange={(e)=>setSearchValue(e.target.value)} style={{display:"inline-block",width:"300px",fontSize:"20px"}} type="text" name="searchemoji" />
    </div>
  );
}
