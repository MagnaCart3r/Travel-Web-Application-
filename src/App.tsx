import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import PopularDestinations from './components/PopularDestinations';
import ProfileLayout from './components/profile/ProfileLayout';
import PersonalInfo from './components/profile/PersonalInfo';
import PaymentMethods from './components/profile/PaymentMethods';
import TransactionHistory from './components/profile/TransactionHistory';

function HomePage() {
  return (
    <main>
      <Hero />
      <PopularDestinations />
    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<PersonalInfo />} />
            <Route path="payment" element={<PaymentMethods />} />
            <Route path="transactions" element={<TransactionHistory />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;