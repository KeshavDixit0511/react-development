import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StockOverviewPages from './Pages/StockOverviewPages';
import StockDetailPages from './Pages/StockDetailPages';
import { WatchListContextProvider } from './WatchListContext';


function App() {
  return (
    <main className='container'>
      <WatchListContextProvider>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<StockOverviewPages/>}/>
        <Route path='/detail:symbol' element={<StockDetailPages/>}/>
      </Routes>
      </BrowserRouter>
      </WatchListContextProvider>
    </main>
  );
}

export default App;
