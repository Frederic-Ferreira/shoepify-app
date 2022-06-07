import { useState } from 'react';
import Header from './components/Header';
import AirMax90Ppl from './images/nike/men/air-max-90-ppl.png';
import AirMax90Scd from './images/nike/men/air-max-90-second.png';
import AirMax90Thrd from './images/nike/men/air-max-90-third.png';
import AirZoomPegasusPpl from './images/nike/men/air-zoom-pegasus-ppl.jpg';
import AirZoomPegasusScd from './images/nike/men/air-zoom-pegasus-second.jpg';
import AirZoomPegasusThr from './images/nike/men/air-zoom-pegasus-third.jpg';

function App() {
  const [shoeList, setShoeList] = useState([
    {
      name: 'Air Max 90',
      images: {
        ppl: AirMax90Ppl,
        scd: AirMax90Scd,
        thrd: AirMax90Thrd,
      },
      sexe: 'men',
      brand: 'nike',
      price: 149.99,
      quantity: 1,
    },
    {
      name: 'Air Zoom Pegasus',
      images: {
        ppl: AirZoomPegasusPpl,
        scd: AirZoomPegasusScd,
        thrd: AirZoomPegasusThr,
      },
      sexe: 'men',
      brand: 'nike',
      price: 119.99,
      quantity: 1,
    },
  ]);
  return (
    <div className="App">
      <Header shoes={shoeList} />
    </div>
  );
}

export default App;
