
import React, { useState } from 'react'

export default function TextForm(props) {
    
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","Success")
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","Success")
    }
    const handleClrClick = () => {
      let newText = "";
      setText(newText);
      props.showAlert("Screen is cleared","Success")
  }
  const handleExtraSpaces = () =>{
    let newText = text.split(/\s+/)
    setText(newText.join(" "))
    props.showAlert("Extra spaces Removed","Success")
  }
    const handleOnchange = (event) => {
        setText(event.target.value)
    }
    
    const[text,setText] = useState("");
  return (
    <>
    <h1 className='heading'>{props.heading}</h1>
    <div className='text-edits'>
      <textarea name="text" value={text} onChange={handleOnchange} className="myBox" cols="140" rows="10"></textarea>
      <div className="buttons">
      <button className="btn" onClick={handleUpClick}>Convert To UpperCase</button>
      <button className="btn" onClick={handleLoClick}>Convert To LowerCase</button>
      <button className="btn" onClick={handleClrClick}>Clear Text</button>
      <button className="btn" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div> 
      
    </div>
    <div className="text-summary">
        <h1 className="summary">Your Text Summary</h1>
        <p className="text-count">{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p className="time-required">{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } Minutes to Read the Given Text</p>
        <h2 className="preview-heading">Preview</h2>
        <p className="preview-text">{text}</p>
    </div>
    </>
  )
}