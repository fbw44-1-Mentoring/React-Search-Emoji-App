import React from 'react'
import GitHubButton from "react-github-btn";

export default function Header() {
    return (
        <div className="header" style={{textAlign:"center",margin:"20px auto",padding:"20px"}}>
        <h1>Search Emoji App &#x1F984;</h1>
        <p>This is Simple Emoji Search App with React</p>
        <div className="github-btn">
          <GitHubButton
            href="https://github.com/nrcool"
            data-icon="octicon-star"
            data-size="large"
            data-show-count={true}
          >
            Star
          </GitHubButton>{" "}
          &nbsp;&nbsp;
          <GitHubButton
            href="https://github.com/nrcool"
            data-icon="octicon-repo-forked"
            data-size="large"
            data-show-count={true}
          >
            Fork
          </GitHubButton>
        </div>
      </div>
    )
}
