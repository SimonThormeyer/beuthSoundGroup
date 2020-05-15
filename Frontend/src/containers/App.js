import Canvas from '../components/threeJS/canvas'
import Menu from '../components/menu'
import React, { useState, useMemo } from 'react';
// import Parent from "./Parent";
import { MusicCtrl } from '../components/toneJS/musicCtrl';

//export functions for menu.js
export const randomFunction = () => {
  console.log("app js random Function");
}
export const loopFunction = () => {
    console.log("app js loop Function");
}
  export const playFunction = () => {
    console.log("app js play Function");
  }
  export const recordFunction = () => {
    console.log("app js record Function");
  }


function App() {

  const [musicCtrlParams, setMusicCtrlParams] = useState({ })
  const [coordinates, setCoordinates] = useState([ ]);

  //only create a new MusicCtrl Object when parameters change that it depends on.
  let musicCtrl = useMemo(() => musicCtrlFactory(musicCtrlParams), [musicCtrlParams]);

  //returns a new MusicCtrl Object depending on the parameters
  function musicCtrlFactory(params) {
    return new MusicCtrl()
  }

  //Callback that is passed to Canvas
  const triggerToneWithCoordinates = (dataFromCanvas) => {

    musicCtrl.triggerSynth(dataFromCanvas[0], dataFromCanvas[1]);
    setCoordinates(dataFromCanvas);
    console.log(`X: ${dataFromCanvas[0]}, Y: ${dataFromCanvas[1]}`);
    console.log(`X from state: ${coordinates[0]}, Y from state: ${coordinates[1]}`);
  };

 
 



  return (
    <div className="App">
      <Canvas updateInfoParent={triggerToneWithCoordinates} />
      <Menu />
    </div>
  );
}

export default App;
