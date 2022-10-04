import logo from './logo.svg';
import './App.css';

function App() {

  let posts = ["강남 우동 맛집", "강남 초밥 맛집"];
  const id = 'nav'
  return (
    <div className="App">
      <div className="black-nav">
        <h4 id={id} style={ {color:"red", fontSize:"16px"} }>블로그</h4>
      </div>
      {posts.map( post => (<h4>{post}</h4>) )}
    </div>
  );
}

export default App;
