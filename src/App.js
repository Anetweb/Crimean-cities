import { useState } from "react";
import { data } from './data';
import './App.css';

function App() {

  const [location, setLocation] = useState(0);
  const {id, header, image, description} = data[location];

  const назадLocation = () => {
   setLocation((location =>{
    location --;
    if(location < 0) {
      return data.length-1;
    }
    return location;
   }))
  }

  const вперёдLocation = () => {
    setLocation((location =>{
      location ++;
      if(location>data.length -1) {
        location = 0;
      }
      return location;
   } )
     )
  }



  return (<div>
    <div className="container">
      <h1>{id}-{header}</h1>
    </div>

    <div className="container">
      <img src={image} width="700px" height="500px" alt="crimea"/>
    </div>

    <div className="container">
      <h2>{description}</h2>
      </div>

      <div className="btn container">
        <button onClick={назадLocation}>Назад</button>
        <button onClick={вперёдLocation}>Вперёд</button>
      </div>

    </div>
  )
}

export default App;
