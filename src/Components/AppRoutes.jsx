// AppRoutes.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookSeat from './BookSeat';
import BookTicket from './BookTicket';
import Payment from './Payment';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookSeat />} />
        <Route path="/book-ticket" element={<BookTicket />} />
        <Route path="/payment" element={<Payment />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
