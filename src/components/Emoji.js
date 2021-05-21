import React from 'react'


export default function Emoji(props) {
    return (
        <div className="emojibox" style={{margin:"10px",width:"200px",height:"200px",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"2px 3px 5px black,inset 1px 1px 5px white",borderRadius:"20px"}}>
        <p style={{fontSize:"30px"}}>{props.symbol}</p>
      </div>
    )
}
