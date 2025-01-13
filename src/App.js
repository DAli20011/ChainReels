import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUp from './SignUp';
import Login from './Login'; // استدعاء صفحة تسجيل الدخول

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} /> {/* صفحة تسجيل الدخول */}
        <Route path="/signup" element={<SignUp />} /> {/* صفحة إنشاء الحساب */}
      </Routes>
    </Router>
  );
};

export default App;
