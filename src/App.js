import { useState } from 'react';
import './App.css'
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Expense from './components/Expense/Expense';
import Calculate from './components/Calculate/Calculate';



function App() {
  const [view, setView] = useState('menu');

  const viewHandler = (requestedView)=>{
    setView(requestedView);
  };
  return (
    <div>
      <Header onLocationClicked={viewHandler}/>
      {view==='menu' && (
        <div className='App'>
          <Menu onMenuClicked={viewHandler}/>
        </div>
      )}

      {view==='expense' && (
        <div className='App'>
          <Expense />
        </div>
      )}

      {view==='calculate' &&(
        <div className='App'>
          <Calculate />
        </div>
      )}
    </div>
    
        
   
  );
}

export default App;
