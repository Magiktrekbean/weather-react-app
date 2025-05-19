import Weather from './Weather';
import './App.css';

export default function App() {
  return (
    <div className="App"><div className="container">
    
      <Weather defaultCity="Dry Ridge" />
     <footer>This code is
      <a href="https://github.com/Magiktrekbean/weather-react-app"target='blank' className='text-decoration-none'>
     {' '}open sourced on github </a>
      written by <a href="https://kylalockett.com/" className='text-decoration-none'target='blank'>
      Kyla Lockett</a>
    </footer> 
  </div>
      

    </div>
  

  );
}


