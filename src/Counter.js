import React, {useEffect, useState} from 'react'

export default function Counter () {
  const [counter, setCounter] = useState(0);
 
  useEffect(() => {
    document.title = `You clicked ${counter} times`;
  }, [counter]);

  const handleCount = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <button className="btn" onClick={handleCount}>
        Clicked {counter} times
      </button>
    </>
  );
};
