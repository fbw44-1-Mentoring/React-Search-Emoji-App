import React, { useContext } from 'react'
import { MyContext } from '../App';
import Emoji from "./Emoji"
export default function EmojiContainer() {
      let {emojiData} = useContext(MyContext)
    return (
        <div className="container" style={{display:"flex",flexWrap:"wrap",justifyContent:"center"}}>
        {emojiData.map((emo) => {
          return (
           <Emoji key={emo.title} symbol={emo.symbol}/>
          );
        })}
      </div>
    )
}
