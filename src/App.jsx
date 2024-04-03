import { useState } from 'react';
import logo from './logo.svg'
import './App.css';
import CoinFlipper from "./CoinFlipper"


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
 return(
  <div>
    <CoinFlipper />
  </div>
  );
};

export default App;
