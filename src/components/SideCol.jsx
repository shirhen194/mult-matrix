import '../App.css';

//left column of multipication table

function SideCol(props) {
  const { arr, dec, binary, hex, calc } = props;

  return (
    <div className='side-col'>
      {(dec || (!dec && !binary && !hex)) && arr.map(num =>
        <div className={calc[0] == num || calc[1] == num ? "num-box primary-nums bi-hi" : "num-box primary-nums"} key={num + "col"}>{num}</div>)}
      {binary && arr.map(num =>
        <div className={calc[0] == num || calc[1] == num ? "num-box primary-nums bi-hi" : "num-box primary-nums"} key={num + "col"}>{num.toString(2)}</div>)}
      {hex && arr.map(num =>
        <div className={calc[0] == num || calc[1] == num ? "num-box primary-nums bi-hi" : "num-box primary-nums"} key={num + "col"}>{num.toString(16)}</div>)}
    </div>
  );
}

export default SideCol;
