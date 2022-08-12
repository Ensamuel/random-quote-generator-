import axios from 'axios'
import React from "react";
import { useState, useEffect } from 'react';



function App(){
const[quotes, setQuotes] = useState('')

useEffect(()=>{fetchQuotes()},[])
  const fetchQuotes = async()=>{
    const {data} = await
    axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
    let quotess = data.quotes
    let randomNumber = Math.floor(Math.random()*quotess.length)
    setQuotes(data.quotes[randomNumber])
  
}
const handleClick= ()=>{
  fetchQuotes()
  }


  return (
    <div>
      <div id="quote-box" style={{
        backgroundColor:'pink',
        height: '50vh',
        width: '100%',
        marginTop: '50px',
        fontFamily: 'sans-serif'
      }
      }>

      <div id="text" style={{
        
        fontSize: '30px'
      }}>
      {quotes.quote}
      </div>

      <div id="author" style={
        {
          textAlign: 'right',
          padding: '30px'
        }
      }>
      {quotes.author}
      </div>

      <button id="new-quote" onClick={handleClick} style={{
        border: 'none',
        backgroundColor: 'white',
        fontSize:'20px',
        cursor:'pointer'
      }}> Get Quote
      </button>

      <a href="twitter.com/intent/tweet" target="_blank" id="tweet-quote">Tweet
      </a>

    </div>
    </div>
  )
}

export default App