import './App.css';
import Home from './home';
import AddContact from './addContact';
import { Routes, Route, Link } from "react-router-dom";
import EditContact from './editContact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addContact" element={<AddContact />} />
        <Route path="editContact" element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default App;
