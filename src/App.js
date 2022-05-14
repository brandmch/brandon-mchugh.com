import './App.css';
import pic from './savannah.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Website is undergoing maintenance!
        </h3>
        <small>-Brandon McHugh</small>
        <p>For now, here is a picture of my dog, Savannah.</p>
        <img src={pic} />
      </header>


    </div>
  );
}

export default App;
