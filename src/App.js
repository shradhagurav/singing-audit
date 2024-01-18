import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookSeat from './Components/BookSeat';
import BookTicket from './Components/BookTicket';
import Payment from './Components/Payment';

const App = () => {
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

export default App;
