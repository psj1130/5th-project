import { Route, Routes } from 'react-router-dom';
import './App.css';
import LiveChart from './market';

function App() {
  return (
    <div className="App">
      <div className='App-Main'>
        <Routes>
          <Route path='/simulator' element={<LiveChart/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
