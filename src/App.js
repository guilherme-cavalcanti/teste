import './App.css';
import Card from './components/layouts/Card';
import User from './components/User';
import React from "react";

function App() {

  return (
    <div className='App'>
      <h1>Usuários</h1>
      <div className='Cards'>
        <Card titulo='Usuários' color='#FF4C65'>
              <User />
        </Card>
      </div>
    </div>
  );
}

export default App;
