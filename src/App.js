import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import MenuBar from './components/MenuBar';
import WelcomeScreen from './components/WelcomeScreen';
import CreateAccountScreen from './components/CreateAccountScreen';

function App() {
  return (
    <div>
      <MenuBar />

      <Router>
        <Route exact path="/" render={() => window.location.assign('/home')} />
        <Route path="/home" component={WelcomeScreen} />
        <Route path="/create-account" component={CreateAccountScreen} />
      </Router>

    </div>
  );
}

export default App;