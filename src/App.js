import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/index';
import View from './pages/View/index';
import Cadastro from './pages/Cadastro/index';
import Edit from './pages/Edit/index';

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/view/:id" element={<View />} />
                <Route path="/edit/:id" element={<Edit />} />
            </Routes>
        </div>
    );
}

export default App;
