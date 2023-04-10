import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DotnetView from "./components/views/DotnetStack";
import JavaView from "./components/views/JavaStack";
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home />}>
          <Route path="dotnet" element={<DotnetView />} />
          <Route path="java" element={<JavaView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
