import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home/Home'
import More from './pages/More'
import PollsMulti from './pages/PollsMulti'
import PollsSimple from './pages/PollsSimple'
import Top from './pages/Top'

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/more" exact component={More} />
        <Route path="/polls/simple" exact component={PollsSimple} />
        <Route path="/polls/multi" exact component={PollsMulti} />
        <Route path="/top" exact component={Top} />
      </Switch>
    </Router>
  );
}

// function App() {
//   return (
//     <div className="App">
//     <h1>Yoooo</h1>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
