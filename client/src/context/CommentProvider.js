import React, { useState, useEffect, createContext } from "react";
import { privateBackendClient } from "../api/axios";
const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState({});
    const [plantId, setPlantId] = useState("");
    const [userName, setUserName] = useState("");
    const [timeStamp, setTimeStamp] = useState("");
    const [commentId, setCommentId] = useState("");
    const [inputValue, setInputValue] = useState({search: ""});
    const [userInput, setUserInput] = useState({
        // TO DO - state should get automatically updated with the userName 
    });
    
    function addNewComment() {
        const date = new Date();
        
        // TO DO - this func should take from the user, add the timestamp and save it to our database
     // these values will need to be captured dynamically and could be saved like this. 
    // const userObject =  
    // {userName: username
    // timeStamp: currenttime
    // plantId: plantId 
    // userId:
    // commentId:} 
    // 
    }
    
    return (
        <CommentContext.Provider value={{
            inputValue: inputValue,
            setInputValue: setInputValue
        }}>
            {children}
        </CommentContext.Provider>    
    )
}

export default CommentContext;