
import './App.css';
import Container from './component/introduction/Container/Container';
import Information from './component/introduction/informations/Information';
import Principale from './component/introduction/principale/Principale';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ContainerPageProjetCssJs from './component/introduction/PageProjetCssJs/containerPageProjetCssJs/ContainerPageProjetCssJs';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Container/>}/>
            <Route path="/principale" element={<Principale/>}/>
            <Route path="/pageProjetCssJs" element={<ContainerPageProjetCssJs/>}/>
        </Routes>
        </BrowserRouter>
  
    </div>
  );
}

export default App;
