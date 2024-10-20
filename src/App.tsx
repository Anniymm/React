import 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Pirveli from './components/pirveli/Pirveli';


function App() {
    return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Pirveli />} />
        </Routes>
      </BrowserRouter>
    );
  }
  
  export default App;
  