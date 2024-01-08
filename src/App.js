import './App.css';
import LikeComponents from './components/Like-components';
import CommentsComponent from './components/Comments-component';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <div className="card">
          <div className="card-img">
            <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/i_2H_ss8i.ko/v0/-1x-1.jpg" alt="" />
            <LikeComponents/>
          </div>
          <CommentsComponent/>
        </div>
      </div>
    </div>
  );
}

export default App;
