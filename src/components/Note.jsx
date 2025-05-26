import React from "react";
import { AiFillDelete } from "react-icons/ai";

function Note(props){

    function handleClick(){
        props.onDelete(props.id);
    }
    return(
        <div className="note">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button onClick={handleClick}><AiFillDelete size={25}/></button>
        </div>
    );
}

export default Note;