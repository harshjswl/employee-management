import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowEmployee from './Components/ShowEmployee';
import AddEmployee from './Components/AddEmployee';
import EditEmployee from './Components/EditEmployee';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header />
      <div className="container-fluid">
        <Routes>
          <Route path="/" element={<ShowEmployee />} />
          <Route path="/addemployee" element={<AddEmployee />} />
          <Route path="/edit/:empId" element={<EditEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
