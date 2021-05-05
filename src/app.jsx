import './app.css';
import Login from './components/login';
import Home from './components/home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App({ImageUploader, authService}) {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/" exact>
            <Login authService={authService} />
          </Route>
          <Route path="/home">
            <Home ImageUploader={ImageUploader} authService={authService} />
          </Route>
        </Switch>
      </BrowserRouter>
    
  );
}

export default App;
