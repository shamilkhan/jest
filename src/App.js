import React, {useEffect} from 'react';
import Button from './Components/Button';
import './App.css';

function App() {

  useEffect(() => {
    (async () => {
      let url =
        "https://api.megapolis-it.ru/trafficlight/Facility/7777";
      let response = await fetch(url);
      let commits = await response.json(); // читаем ответ в формате JSON
      console.log(commits);
    })();
    
  }, []);

  return (
    <div className="App">
      <Button 
        text="test-2"
      />
      <Button>
        test-3
      </Button>
    </div>
  );
}

export default App;
