import './App.css';
import { Card } from 'primereact/card';
import "primereact/resources/primereact.min.css";
import "primereact/resources/themes/lara-dark-blue/theme.css";
import { GiSpaceShuttle } from "react-icons/gi";
import { GiRocket } from "react-icons/gi";
import { GiOfficeChair } from "react-icons/gi";
import { GiTrophy } from "react-icons/gi";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p className='App-header-title'>What do you want to know about?</p>
        <div className='App-main-container'>
          <Card style={{ width: '15rem' }}>
            <GiSpaceShuttle size={'2em'} />
            <span>
              Launchers
            </span>
          </Card>
          <Card style={{ width: '15rem' }}>
            <GiRocket size={'2em'} />
            <span>
              Spacecrafts
            </span>
          </Card>
          <Card style={{ width: '15rem' }}>
            <GiTrophy size={'2em'} />
            <span>
              Customer Satellites
            </span>
          </Card>
          <Card style={{ width: '15rem' }}>
            <GiOfficeChair size={'2em'} />
            <span>
              Centres
            </span>
          </Card>
        </div>
      </header>
    </div>
  );
}

export default App;
