import '../App.css';
import { useState } from 'react'

//left column of multipication table

function isPerfectSquare(x) {
  let s = parseInt(Math.sqrt(x));
  return (s * s == x);
}

function isFibonacci(n) {
  return isPerfectSquare(5 * n * n + 4) ||
    isPerfectSquare(5 * n * n - 4);
}

function MulCol(props) {

  const [showRes, setShowRes] = useState(0)
  const [res, setRes] = useState("")
  const { num: colNum, arr, dec, binary, hex, calc, molClass } = props;


  const showResult = (number) => {
    if (binary) {
      setRes(colNum.toString(2) + " x " + number.toString(2) + " = " + (colNum * number).toString(2))
    }
    else if (hex) {
      setRes(colNum.toString(16) + " x " + number.toString(16) + " = " + (colNum * number).toString(16))
    } else {
      setRes(colNum.toString() + " x " + number.toString() + " = " + (colNum * number).toString())
    }
    setShowRes(number)
  }


  return (
    <div className='mul-col'>
      {arr.map(num =>
        <div className={getClass(num, colNum)}
          key={colNum * num + "col"}
          onMouseEnter={() => showResult(num)}
          onMouseLeave={() => setShowRes(0)}
          onClick={() => showRes !== 0 ? showResult(num) : setShowRes(0)}
        >
          {(dec || (!dec && !binary && !hex)) && (colNum * num)}
          {binary && (colNum * num).toString(2)}
          {hex && (colNum * num).toString(16)}
          {showRes === num && <div className='tooltip'>
            {res}</div>}
        </div>)}
    </div>
  );

  function getClass(num, colNum) {
    let className = "num-box "
    if (isFibonacci(num * colNum)) {
      className += "num-box fibonacci"
    }
    if ((calc[0] == num && calc[1] == colNum) || (calc[1] == num && calc[0] == colNum)) {
      className += " num-box-selected"
    }
    return className
  }
}

export default MulCol;
