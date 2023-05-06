
import './App.css';
import Imagecomponent from './component/Imagecomponent'
import Imageviewr from './component/Imageviewr';
import Infocomponent from './component/Infocomponent'
import Infoviewcomp from './component/infoviewcomp'
import { Paginatedusercomp } from './component/Paginatedusercomp';
import { SecPaginatedusercomp } from './component/secondpaginatedcomp';

function App() {
  return (
    <div className="App">
     <SecPaginatedusercomp/>
     <Paginatedusercomp/>
     <Imagecomponent/>
     <Imageviewr/>
     <Infocomponent/>
     <Infoviewcomp/>
    </div>
  );
}

export default App;
