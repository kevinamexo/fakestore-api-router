import './App.css';
import Navbar from './Navbar'
import {Switch, Route} from 'react-router-dom'
import Categories from './Categories';
import Products from './Products'
import {ScreenSizeProvider} from './context'

function App() {
  return (
    <div className="App">
      <Navbar/> 
      <Switch>
        <Route exact path="/">
          <p>This is the main page</p>
        </Route>
        <Route path="/products">
          <Products/>
        </Route>
        <Route path="/categories">
          <Categories/>
        </Route>
      </Switch>
    
    
    </div>
   
  );
}

export default App;
