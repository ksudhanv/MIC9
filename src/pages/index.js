import React, {useState} from 'react';
import axios from 'axios'

export default function Example() {
  
  const [person, setPerson] = useState('')
  const quote = () => {
    axios.get('https://api.quotable.io/random').then(response => {
      setPerson(response.data.author)
    })
  }
    return (
    <div>
        <p>{person}</p>
        <button onClick={quote}>Click here for a random person</button>
    </div>
  )
}

export const Head = () => <title>Home Page</title>
