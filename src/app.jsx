import './app.css';
import Login from './components/login';
import Home from './components/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App({authService}) {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService}/>
          </Route>
          <Route path="/home">
            <Home authService={authService}/>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
