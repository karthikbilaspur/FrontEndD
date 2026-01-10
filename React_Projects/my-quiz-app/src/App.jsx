import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Quiz from './Quiz';
import Leaderboard from './Leaderboard';
import UserProfile from './UserProfile';
import QuizCategory from './QuizCategory';
import QuizResults from './QuizResults';
import Feedback from './Feedback';
import About from './About';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/quiz-category" element={<QuizCategory />} />
        <Route path="/quiz-results" element={<QuizResults />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;