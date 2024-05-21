import React from 'react';
import Login from './Loginform/Login';
import Dashboard from './Dashboard/Dashboard';
import QuestionList from './Questiontitle/QuestionList';
import Level from './levels/Level';
import Levelpy from './levels/Levelpy';
import QuestionDetail from './Questiontitle/QuestionDetail';
import Leveljava from './levels/Leveljava';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';



function App() {
  return ( <>
    <Router>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Dashboard' element={<Dashboard />} />
          <Route path='/Level' element={<Level />} />
          <Route path='/Levelpy' element={<Levelpy />} />
          <Route path='/Leveljava' element={<Leveljava />} />
          <Route path='/QuestionList' element={<QuestionList />} />
          <Route path="/question/:id" element={<QuestionDetail />} />
      </Routes>
    </Router> 
    </>
  )
}

export default App;
