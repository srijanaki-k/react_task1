//Word Count
//Task1
import React from "react";
import {useState,useEffect} from "react";
import './App.css'


function App(){
    const [text, setText] = useState('');
    const [wordCount,setWordCount] = useState(0)
    const [charCount,setCharCount] = useState(0)
    
    const changeHandle=(e)=>{
        setText(e.target.value);
    }
    useEffect(() => {
        console.log("effect")
        // array of words
        const words = text.split(' ');
    
        // update word count
        let wordCount = 0;
        words.forEach((word) => {
          if (word.trim() !== '') {
            wordCount++;
          }
        });
        setWordCount(wordCount);
    
        // update char count (including whitespaces)
        setCharCount(text.length);
      }, [text]);
    
   
    return(
        <>
        <div className="neg">
        <div className="zero">
        <h2 className="para">Responsive Paragraph Word Counter</h2>
        <div>
            <textarea className="one" onChange={changeHandle} value={text}/>
            <p> Word count: {wordCount}</p>
            <p> Char count(including spaces): {charCount}</p>
        </div>
        </div>
        </div>
        
          
        </>
    )
    
      
    
}
export default App