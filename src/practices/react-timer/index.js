/* global React, ReactDOM, document */
/* eslint-disable react/button-has-type */
/*
  https://codepen.io/bobwei/pen/dxgmaY
*/
const { useState } = React;

const Comp = () => {
  const [times, timer, start, lap, stop] = useTimer();
  return (
    <div>
      <div>{times[times.length - 1] - times[0]}</div>
      <div>
        {times
          .map((t, i, arr) => {
            if (i > 0 && i < arr.length - 1) {
              return <div>{t - arr[i - 1]}</div>;
            }
            return null;
          })
          .reverse()}
      </div>
      {!timer && <button onClick={start}>start</button>}
      {timer && <button onClick={lap}>lap</button>}
      {timer && <button onClick={stop}>stop</button>}
    </div>
  );
};

function useTimer() {
  const [times, setTimes] = useState([new Date().getTime()]);
  const [timer, setTimer] = useState(null);
  const start = () => {
    const t0 = new Date().getTime();
    setTimes([t0, t0]);
    const ref = setInterval(() => {
      setTimes((arr) => [...arr.slice(0, arr.length - 1), new Date().getTime()]);
    }, 500);
    setTimer(ref);
  };
  const lap = () => {
    setTimes((arr) => [...arr, new Date().getTime()]);
  };
  const stop = () => {
    clearInterval(timer);
    setTimer(null);
  };
  return [times, timer, start, lap, stop];
}

ReactDOM.render(<Comp />, document.getElementById('root'));
