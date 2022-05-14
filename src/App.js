import './App.css';
import pic from './Screenshot_20220514-121146_Message+.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>
          Website coming soon!
        </h3>
        <small>-Brandon McHugh</small>
        <p>For now, here is a picture of my dog, Savannah.</p>
        <img src={pic} />
      </header>


    </div>
  );
}

export default App;
