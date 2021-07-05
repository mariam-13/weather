import './App.css';
import Search from './components/Search';
import CurrentDay from './components/CurrentDay';
import HourDay from './components/HourDay';
import Week from './components/Week';
import { useState } from 'react';

function App() {
  const [search, setSearch] = useState();
  return (
    <div className="App">
      <Search setSearch={setSearch} />
      <div className="wraper">
        <div>
          <CurrentDay city={search} />
        </div>
        <div>
          <Week city={search} />
        </div>
      </div>
      <div>
        <HourDay city={search} />
      </div>
    </div>
  );
}

export default App;
