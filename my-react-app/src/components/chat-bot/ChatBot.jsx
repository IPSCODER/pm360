import React, { useState } from "react";
import classes from "./chatbot.module.css";

const ChatBot = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleChatbot = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={classes.parent}
      onClick={toggleChatbot}
      style={{
        width: expanded ? "650px" : "50px",
        height: expanded ? "490px" : "50px",
        borderRadius:expanded ? "2px" : "50%"
      }}
    >
        {!expanded && <h1>C</h1>}
        {expanded && <span className={classes.heading} >
            <h2>Chat With Me</h2>
            <span>x</span>
            </span>}
      {expanded && <div className={classes.child} >
      <iframe id="chatWithMe" title="Chat with Me" width="100%" height="100%" src="https://nyskdwg8.chat.qbusiness.us-west-2.on.aws/"> </iframe>  
         </div>}
    </div>
  );
};

export default ChatBot;
