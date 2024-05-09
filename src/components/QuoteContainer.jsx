import React, { useState } from 'react'
import Data from '../data/data'


const alreadyShown = []

function QuoteContainer(props) {
    const [quotes, setQuotes] = useState(`${Data[0].quote}`)
    const [author, setAuthor] = useState(`${Data[0].author}`)
    const [backgroundColor, setBackGroundColor] = useState('green')



    const getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      };

    const getQuote = () => {
        const randomNum = Math.floor(Math.random() * Data.length)
        const randomQuotes = Data[randomNum].quote
        const randomAuthor = Data[randomNum].author
        if(!alreadyShown.includes(randomNum)) {
            alreadyShown.push(randomNum)
            setQuotes(randomQuotes);
            setAuthor(randomAuthor);
            const randomColor = getRandomColor()
            setBackGroundColor(randomColor)
        } else {
            getQuote()
        }
        
    }
    const bg = document.body
    bg.style.backgroundColor = backgroundColor
   
  return (
    <div >
        <h2>{quotes}</h2>
        <em>~ {author}</em> <br />
        <button onClick={getQuote} style={{backgroundColor:`${backgroundColor}`,margin: '0.5rem 0' ,padding: '0.5rem', color: 'white'}}>Get quotes</button>
    </div>
  )
}

export default QuoteContainer