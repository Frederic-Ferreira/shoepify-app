import { useState, Routes, Route } from 'react';
import Header from './components/Header';
import { ShoeList } from './ShoeList';

function App() {
  const [shoeList, setShoeList] = useState(ShoeList);

  return (
    <div className="App">
      <Header shoes={shoeList} />
      {/* <Routes>
        <Route path="/" />
        <Route path="/" />
      </Routes> */}
    </div>
  );
}

export default App;
