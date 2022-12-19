import React,{useState} from 'react'

export default function TextForm(props) { 
  function WordCount(str) {
    return str.split(/\s+/)
           .filter(function(n) { return n !== '' })
           .length;
}
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText);
       props.showAlert("Converted to Uppercase","success")
    }
    const handleLoClick=()=>{
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success")
    }
    const handleClearClick=()=>{
        let newText='';
        setText(newText);
        props.showAlert("Text cleared","success")
    }
     const copy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copy to clipboard","success")
      }
      const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success")
      }
    const handleOnChange=(event)=>{
     setText(event.target.value);
    }
    const[text,setText]=useState('');
  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1  className="mb-3">{props.heading}</h1>
<div className="mb-3">
  <textarea className="form-control" placeholder='Enter text area' value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#121212':'white' , color:props.mode==='dark'?'white':'black'}}  id="myBox" rows="12"></textarea>
</div>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={copy}>Copy</button>
<button disabled={text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces}>Remove extra spaces</button>

<div className='container my-2'>
  <h2>Summary of text</h2>
   <p>{WordCount(text)} words and {text.length} characters</p>
   <p>{0.008 * text.split(" ").filter((element)=>{
    return element.length!==0 }).length} Minutes to read</p>
   <h3>Preview</h3>
   <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
    </div>
  )
}

