import { Route, Routes } from 'react-router-dom';
import './App.css';
import LiveChart from './market';
import ChartComp from './market/chart/chart';

function App() {
  return (
    <div className="App">
      <div className='App-Main'>
        <Routes>
          <Route path='/simulator/:id' element={<LiveChart/>}/>
          <Route path='/test' element={<ChartComp/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
