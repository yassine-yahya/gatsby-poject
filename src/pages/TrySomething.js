import React, { useState } from 'react';

const TrySomething = () => {
    const [name, setName] = useState(''); 
    const [output, setOutput] = useState(''); 

    const handleTrySomething = () => {
        const personalizedOutput = `Hello, ${name}! I hope you enjoy trying something new today.`;
        setOutput(personalizedOutput);
      };



    return (
      <div>
      <h1>Try Something</h1>
      <form className='flex-col' onSubmit={(event) => event.preventDefault()}>
        <label htmlFor="name">Enter your name: </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button type="button" onClick={() => handleTrySomething()}>Try Something!</button>
      </form>
      {output && <p>{output}</p>}
    </div>
    )
  };

  export default TrySomething