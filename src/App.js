import './App.css';
import ColorBox from './components/ColorBox/ColorBox';
import { twoDimentionalArray } from './mock-data';

function App() {
  return (
    <div className="App ColorBoxContainer">
      {
        twoDimentionalArray.map((item, ind) => {
          return (
            <div key={ind}>
              {
                item.map((item, ind) => {
                  return <ColorBox key={ind}></ColorBox>
                })
              }
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
