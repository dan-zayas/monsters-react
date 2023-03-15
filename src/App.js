import {Component} from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: '4r3fhuihiu',
          name: 'Biscuits'
        },
        {
          id: 'vdsbbdfbhrtrbbrh',
          name: 'Frogger'
        },
        {
          id: 'dggrgrrbrdgr45g',
          name: 'Pizza'
        },
      ]
    }
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <h1 key={monster.id}>{monster.name}</h1>
          })
        }
      </div>
    );
  }
}

export default App;
