import logo from './logo.svg';
import './App.css';
import hellocgu from './cgu_hello'
import multbutton from './cgu.mutiButton'


function App() {
  return (
    <div className="App">
      <div>
        {hellocgu()}
      </div>
      <div>{multbutton(10)}</div>
    </div>
  );
}

export default App;
