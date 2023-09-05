import logo from './logo.svg';
import './App.css';
import Ruleta from './Ruleta';
import participantesData from './participantes-andicom.json'

function App() {  
  return (
    <div className='App'>
      <Ruleta personas={participantesData}/>              
    </div>
  );
}

export default App;
