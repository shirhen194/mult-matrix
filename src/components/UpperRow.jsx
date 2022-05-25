import '../App.css';

//upper row of multipication table

function UpperRow(props) {
  const { arr, dec, binary, hex, calc } = props;

  return (
    <div className='upperRow'>
      <div className="num-box primary-nums">X</div>
      {(dec || (!dec && !binary && !hex)) && arr.map(num =>
        <div className={calc[0] == num || calc[1] == num ? "num-box primary-nums bi-hi" : "num-box primary-nums"}
        style={{ borderLeft: '0.7px solid rgb(108, 0, 143)' }} key={num + "row"}>{num}</div>)}
      {binary && arr.map(num =>
        <div className={calc[0] == num || calc[1] == num ? "num-box primary-nums bi-hi" : "num-box primary-nums"}
        style={{ borderLeft: '0.7px solid rgb(108, 0, 143)' }} key={num + "row"}>{num.toString(2)}</div>)}
      {hex && arr.map(num =>
        <div className={calc[0] == num || calc[1] == num ? "num-box primary-nums bi-hi" : "num-box primary-nums"}
        style={{ borderLeft: '0.7px solid rgb(108, 0, 143)' }} key={num + "row"}>{num.toString(16)}</div>)}
    </div>
  );
}

export default UpperRow;
