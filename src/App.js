
import {useState} from "react"
import Display from './components/Display/Display';
import Buttons from './components/Buttons/Buttons';
import Container from './components/Container/Container';



function App() {

  const [time, setTime] = useState({ms:0, s:0, m:0, h:0})
  const [inter, setInter] = useState();
  

  let updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const start = () => {
    run();
    setInter(setInterval(run, 10));
    
  }

  const run = () => {

    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }
    if(updatedS === 60){
      updatedM++;
      updatedS = 0;
    }
    if(updatedMs === 100){
      updatedS++;
      updatedMs = 0;
    }

    updatedMs++;
    return setTime({ms:updatedMs, s:updatedS, m:updatedM, h:updatedH})
  }

  const stop = () => {
    clearInterval(inter);
    
  }

  const reset = () => {
    clearInterval(inter);
    setTime({ms:0, s:0, m:0, h:0});
    
  }

  return (
    <Container>
      <div className="main-section">
        <h1>TIMER</h1>
        <Display  time={time}/>
        <Buttons start = {start} stop = {stop} reset = {reset} />
      </div>
    </Container>
  );
}

export default App;
