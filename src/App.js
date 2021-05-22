import React, { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import SearchEmoji from "./components/SearchEmoji";
import EmojiContainer from "./components/EmojiContainer";
import data from "./json/emoji.json"
//create a context
//wrap you whole application within your context provider
//provide your context with values/data
//consume context

//creating container empty
export const MyContext = createContext(null)



function App() {
  const [emojiData,setEmojiData]=useState(data)
  const [searchValue,setSearchValue]=useState("")

  const filterEmojis=()=>{
   
    let filteredEmoji= data.filter(emo=>emo.keywords.match(searchValue))
    setEmojiData(filteredEmoji)
  }

  useEffect(()=>{
    //shouldComponentUpdate or //componentDidUpdate
    filterEmojis()
  },[searchValue])

  return (
    <MyContext.Provider value={{emojiData,setEmojiData,searchValue,setSearchValue}}>
    <div className="App" style={{background:"linear-gradient(to right,pink,black)"}}>
      <Header />
      <SearchEmoji />
      <EmojiContainer />
    </div> 
    </MyContext.Provider>
  );
}

export default App;
