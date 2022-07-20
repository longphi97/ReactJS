import './App.css';
import { useState, useRef } from 'react';
import InfinitloopEffect from './infinitloopEffect';

function App() {

  const [ name, setName ] = useState("");
  const [ value, Setvalue] = useState("Counter");
  const [ count, setCount ] = useState(1);
  const [color, setColor] = useState("black")

  const nameRef = useRef();

  const handleIncrease = () => {
    setCount(count+1);
  }

  const handleChangename = () => {
    Setvalue(name);
    setName('');
    setCount(1)
    nameRef.current.focus()
  }

  const handleRed = () => {
    setColor("red")
  }

  const handleYellow = () => {
    setColor("green")
  }

  const handleBlue = () => {
    setColor("blue")
  }

  return (
    <div className="App" style={{padding: 30}}>
      {/* <div className= "titles"
        style= {{color: color}}
      >
        {value}
      </div>
      <div className='count' 
         style= {{color: color}}
      >
        <h1>{count}</h1>
        <button onClick={handleIncrease}>Tăng giá trị</button>
      </div>
      <div className='changeName'>
        <input
          ref={nameRef}
          type="text"
          value={name}
          onChange = {e => setName(e.target.value) }
        />
        <button onClick={handleChangename}>Đổi tên</button>
      </div>
      <div className='name'
        style= {{color: color}}
      >
        Chọn màu cho {value}
      </div>
      <div className="buttoncolor" >
        <button className='redcolor' onClick={handleRed}>
          Red
        </button>
        <button className='greencolor' onClick={handleYellow}>
          Green
        </button>
        <button className='bluecolor' onClick={handleBlue}>
          Blue
        </button>
      </div> */}
      <InfinitloopEffect />
    </div>
  );
}

export default App;
