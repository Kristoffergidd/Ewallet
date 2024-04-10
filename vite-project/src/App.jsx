import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { CardProvider } from './contexts/CardContext';
import Home from './views/Home/Home';
import AddCard from './views/AddCard/AddCard';

function App() {
  return (
    <Provider store={store}>
      <CardProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/add-card" element={<AddCard />} />
          </Routes>
        </Router>
      </CardProvider>
    </Provider>
  );
}

export default App;