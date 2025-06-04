import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import {Routes , Route, Router} from 'react-router-dom';
import EditorPage from './component/EditorPage';
import {Toaster} from "react-hot-toast" ;

function App() {
  return (
    < >
     <div>
      <Toaster  position='top-center' />
    </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/editor/:roomId" element={<EditorPage />} />
      </Routes>
    </>
  );
}

export default App;
