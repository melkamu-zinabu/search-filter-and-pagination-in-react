
import './App.css';
import Imagecomponent from './component/Imagecomponent'
import Imageviewr from './component/Imageviewr';
import { Paginatedusercomp } from './component/Paginatedusercomp';


function App() {
  return (
    <div className="App">
     <Paginatedusercomp/>
     <Imagecomponent/>
     <Imageviewr/>
    </div>
  );
}

export default App;
