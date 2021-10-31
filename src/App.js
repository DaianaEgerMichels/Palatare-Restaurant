import React from 'react';
import './App.css';
import Home from './pages/Home';
import PageRecipes from './pages/PageRecipes';
import PageTwo from './pages/PageTwo';

class App extends React.Component {
  render(){return (
    <div className="App">
      <Home></Home>
      {/*<PageTwo></PageTwo>*/}
      {/*<PageRecipes></PageRecipes>*/}
    </div>
  );}
}

export default App;
