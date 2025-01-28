import React, { useState } from "react";

function CreateArea(props) {

  const[nTitle,setTitle] = useState("");
  const[nContent,setContent] = useState("");

  function newtitle(e){
    setTitle(e.target.value);
  }
  function newcontent(e){
    setContent(e.target.value);
  }
  function newnote(){

    props.addNote({
      title: nTitle,
      content: nContent
    });

  }
  return (
    <div>
      <form >
        <input onChange={newtitle} name="title" placeholder="Title" />
        <textarea onChange={newcontent} name="content" placeholder="Take a note..." rows="3" />
        <button disabled={ !nTitle || !nContent } type="button" onClick={newnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
