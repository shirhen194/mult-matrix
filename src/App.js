import './App.css';
import React from 'react';
import UpperRow from './components/UpperRow';
import SideCol from './components/SideCol';
import MulCol from './components/MulCol';
import { useState, useRef, useCallback } from 'react'
//create a multipication table

function App() {

  // const [range, setRange] = useState(10)
  const [rangeArr, setRangeArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const rangeRef = useRef(10)
  const calcRef = useRef(null)


  let [dec, setDec] = useState(true)
  let [binary, setBinary] = useState(false)
  let [hex, setHex] = useState(false)

  let [calc, setCalc] = useState(" x ")

  const createRange = () => {
    //get number value of range ref
    if(rangeRef.current.value) {
      setRangeArr(Array.from({ length: parseInt(rangeRef.current.value) }, (_, i) => i + 1))
    } else {
      setRangeArr([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    }
    setCalc(calcRef.current.value)
    console.log(calcRef.current.value)
  }

  return (
    <div className="App">
      <label for="field1" className="range-label">
        <span className='choose-span'>Choose range: </span>
        <input type="text" class="input-field" name="field1" ref={rangeRef}/>
      </label>
        <label for="field1" className="range-label">
        <span className='choose-span'>calc: </span>
        <input type="text" class="input-field" name="field1" ref={calcRef} />
      </label>
      <label><span> </span><input type="button" value="Add" onClick={createRange} /></label>
      <form>
        <div class="radio-group">
          <input type="radio" id="option-three" name="selector" className="radio" />
          <label for="option-three" className="base-label"
            onClick={() => {
              setHex(true)
              setDec(false)
              setBinary(false)
            }}
          >
            Hex
          </label>
          <input type="radio" id="option-two" name="selector" className="radio" />
          <label for="option-two" className="base-label" 
          onClick={() => {
            setBinary(true)
            setDec(false)
            setHex(false)
          }}
          >Binary</label>
          <input type="radio" id="option-one" name="selector" className="radio" />
          <label for="option-one" className="base-label" 
          onClick={() => {
            setDec(true)
            setBinary(false)
            setHex(false)
            }}>
            Decimal
          </label>
        </div>
      </form>
      <div className="table-wrap">
        <div className="upper-container">
          <UpperRow arr={rangeArr} dec={dec.checked} binary={binary.checked} hex={hex.checked} calc={calc.split("x")}/>
        </div>

        <div className="lower-container">
          <SideCol arr={rangeArr} dec={dec.checked} binary={binary.checked} hex={hex.checked} calc={calc.split("x")}/>
          {rangeArr.map(num =>
            <MulCol key={num + "MulCol"}
              num={num} arr={rangeArr}
              dec={dec}
              binary={binary}
              hex={hex}
              calc={calc.split("x")}
              molClass={num == rangeArr[rangeArr.length - 1] ? "mol-last" : "mol-col"}
            />)}
        </div>
      </div>
    </div>
  );
}

export default App;
