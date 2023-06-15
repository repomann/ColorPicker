// Write your Color component here
import { useState } from 'react'

// const [selectedColor, setSelectedColor] = useState("")

const Color = ({color, setSelectedColor}) => {
  return (
    <div className={color}
      onClick={() => setSelectedColor(color)}
    ></div>
  )
}

const App = () => {
  const [selectedColor, setSelectedColor] = useState("")

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      {/* This is the Picker component (below) */}
      <div id="colors-list">{
        <div id="colors-list">   
          <Color color="orange" setSelectedColor={setSelectedColor}/>
          <Color color="blue" setSelectedColor={setSelectedColor}/>
          <Color color="green" setSelectedColor={setSelectedColor}/>
        </div>
      }</div>
    </div>
  );
};

export default App;
