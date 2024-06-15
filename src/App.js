import logo from './logo.svg';
import './App.css';
import Jaanu from './components/Jaanu'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
function App() {
  return (
    <div className="App">
      {/* <Welcome/>
      <Jaanu /> */}
      <Hello name="jahnavi" heroname="itachi"/>
      <Hello name="bhavs" />
      <Hello name="scooty"><p>hey man!!</p></Hello>
      <Welcome name="jaanu"><p>works hard!</p></Welcome>
      
    </div>
  );
}

export default App;
