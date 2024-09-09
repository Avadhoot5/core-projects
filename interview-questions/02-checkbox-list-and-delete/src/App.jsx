import { useState } from 'react';
import './App.css'


function App() {

  let arr = ['Play cricket', 'Play video game', 'read book', 'complete react', 'get a job'];
  let checkState = Array(arr.length).fill(false);

  const [todo, setTodo] = useState(arr);
  const [checkBox, setCheckBox] = useState(checkState);

  const handleCross = (index) => {
    let filterArr = todo.filter((value, i) => i !== index);
    setTodo(filterArr);
    setCheckBox(prev => {
      const newCheckBox = prev.filter((_,i) => i !== index);
      return newCheckBox;
    });
  }
  console.log(checkBox);

  return (
    <>
      <>
         {/*displaying the array items  */}
         <h2>Todo List</h2>
         {todo.map((value, index) => {
          return (
            <div key={index}
            style={{maxWidth:'15%', display:'flex', gap: '10px', justifyContent: 'space-between'}}>
              <span>
                <input type="checkbox" name={index}
                checked={checkBox[index] || false}
                onChange={() => {
                  setCheckBox((prev) => {
                    const newCheckBox = [...prev];
                    newCheckBox[index] =  !newCheckBox[index];
                    return newCheckBox;
                  });
                }}/>
              </span>
              {value && (
                <div>
                  {value}
                  {checkBox[index] && <CrossMark handleCross={handleCross} index={index}/>}
                </div>
              )}
            </div>
          )
         })}
      </>
    </>
  )
}

function CrossMark({handleCross, index}) {
  return (<>
    <button
      onClick={() => {
        handleCross(index)
      }}> [X]
    </button>
  </>)
}

export default App
